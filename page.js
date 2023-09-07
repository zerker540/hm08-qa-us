module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '#number',
    cardCodeField: '.card-second-row #code',
    commentField: '#comment',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportiveButton: 'div=Supportive',
    paymentMethodButton: '.pp-text',
    addCardButton: 'div=Add card',
    linkButton: '.pp-buttons .button.full',
    orderRequirementsButton: '//div[contains(text(), "Order requirements")]',
    closePaymentMethodButton: '.payment-picker .close-button',
    orderButton: '.smart-button-main',
    //Switches
    blanketAndHandkerchiefsSwitch: '.r-sw-container .switch',
    //Counters
    iceCreamPlusCounter: '.reqs .counter-plus',
    iceCreamPlusCounterValue: '.reqs .counter-value',
    // Other Elements
    tariffCard4: '.tcard.active #tariff-card-4',
    plc: '.plc',
    cardPaymentMethodIcon: 'img[alt="card"]',
    orderHeaderTitle: '.order-header-title',
    // Modals
    phoneNumberModal: '.modal',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(1000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    fillCardNumber: async function(cardNumber) {
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.setValue(cardNumber);
        

    },
    fillCardCodeField: async function(cardCode) {
        const cardCodeField = await $(this.cardCodeField);
        await cardCodeField.setValue(cardCode)
    }
};