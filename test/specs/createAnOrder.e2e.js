const { expect, browser, $ } = require('@wdio/globals')

const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {

    it('Should open phone number modal.', async () => {
        //Open browser & fill address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Click phone number button
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        //Check phone number modal
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('Should save the phone.', async () => {
        //Open browser & fill address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Input phone number, intercept code, & input code
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        //Check phone number
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })    
//The car search modal appears
    it('Should have the car search modal appear.', async () => {
        //Open browser & fill address
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Input phone number, intercept code, & input code
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        //Clicking the order button
        const orderButton = await $(page.orderButton);
        await orderButton.click();
        //Check it is searching for car
        const orderHeaderTitle = await $(page.orderHeaderTitle);
        await expect(orderHeaderTitle).toHaveTextContaining('Car search');
    })
//Waiting for the driver info to appear in the modal
    it('Should have the driver info appear.', async () => {
        //Open browser & fill address
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Input phone number, intercept code, & input code
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        //Clicking the order button
        const orderButton = await $(page.orderButton);
        await orderButton.click();
        //Wait for order to process
        await browser.pause(30000)
        //Check driver info has appeared
        const orderHeaderTitle = await $(page.orderHeaderTitle);
        await expect(orderHeaderTitle).toHaveTextContaining('The driver will arrive');
    })
//Setting the address
    it('Should fill the adress.', async () => {
        //Open browser & fill address
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Check fields for addresses
        const fromField = await $(page.fromField);
        const toField = await $(page.toField);
        await expect(fromField).toHaveValue('East 2nd Street, 601');
        await expect(toField).toHaveValue('1300 1st St');
    })
//Selecting supportive plan
    it('Should select supportive plan.', async () => {
        //Open browser & fill address
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Click supportive plan button
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.click();
        //Check supportive plan is selected
        const tariffCard4 = await $(page.tariffCard4);
        await expect(tariffCard4).toBeExisting();
    })
//Filling in the phone number
    it('Should fill in the phone number.', async () => {
        //Open browser & fill address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Input phone number, intercept code, & input code
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        //Check phone number
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
//Adding a credit card
    it('Should add credit card.', async () => {
        //Open browser & fill address
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Open payment method modal
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.click();
        //Open add card modal
        const addCardButton = $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        //Check card number field
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.waitForDisplayed();
        //Input card number
        const cardNumber = helper.getCardNumber();
        await page.fillCardNumber(cardNumber);
        //Check card code field
        const cardCodeField = await $(page.cardCodeField);
        await cardCodeField.waitForDisplayed();
        //Input card code
        const cardCode = helper.getCardCode();
        await page.fillCardCodeField(cardCode);
        //Click other element for "LinkButton" button to activate
        const plc = await $(page.plc);
        await plc.waitForDisplayed();
        await plc.click();
        //Click "linkButton" button
        const linkButton = await $(page.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();
        //Close payment method modal
        const closePaymentMethodButton = await $(page.closePaymentMethodButton);
        await closePaymentMethodButton.waitForDisplayed();
        await closePaymentMethodButton.click();
        //Confirm card added
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect (cardPaymentMethodIcon).toBeExisting();
    })
//Writing a message to the driver
    it('Should write a message to the driver.', async () => {
        //Open browser & fill address
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Input message
        const commentField = await $(page.commentField);
        await commentField.setValue("Hey there!");
        //Check message
        await expect(commentField).toHaveValue("Hey there!");
    })
//Ordering a blanket and handkerchiefs
    it('Should order a blanket and handkerchiefs.', async () => {
        //Open browser & fill address
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Click supportive plan button
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.click();
        //Click blanket and handkerchiefs toggle button
        const blanketAndHandkerchiefsSwitch = await $(page.blanketAndHandkerchiefsSwitch);
        await blanketAndHandkerchiefsSwitch.click();
        
        await browser.pause(2000);
    })
//Ordering 2 ice creams
    it('Should order 2 ice creams.', async () => {
        //Open browser & fill address
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        //Click supportive plan button
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.click();
        //Click 2 times
        const iceCreamPlusCounter = await $(page.iceCreamPlusCounter);
        await iceCreamPlusCounter.click();
        await iceCreamPlusCounter.click();

        await browser.pause(2000);

        const iceCreamPlusCounterValue = await $(page.iceCreamPlusCounterValue);
        await expect(iceCreamPlusCounterValue).toHaveText('2');
    })
})

