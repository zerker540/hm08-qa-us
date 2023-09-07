# Sprint 8 project

This project is to create a serries of automated tests run through WebdriverIO and coded in Javascript to test the functionality of the Urban Routes app.

In this project, Git Bash, GitHub, WebdriverIO, DevTools, CSS Selectors, XPath Locators, and Visual Studio Code were used in the creation of these automated tests.
Git Bash is used to clone the repository from GitHub to a chosen local directory and to push the new commit back onto GitHub.
GitHub is used to keep online repositories where this data can be stored, shared, and updated.
Visual Studio Code can be used to write, edit, and save the JavaScript code for the automated test files.
WebdriverIO is the test framework used for running the automated tests.
DevTools is used to help find page elements and identify unique selectors or locators to best run the automated tests.
CSS Selectors and XPath Locators are used in the test code to designate the webpage elements that are used in the automated tests.

To run these tests you will need to do the following:

1. Clone the repository "hm08-qa-us" from github.
-Open Git Bash.
-Change the directory(cd) to, or create(mkdir) then change to a directory where the repository will be cloned to.
-In Git Bash, in the selected directory run the command:
    If you are using HTTPS:
    "git clone https://github.com/username/hm08-qa-us.git"
    If you are using SSH:
    "git clone git@github.com:username/hm08-qa-us.git"
-This command will clone the folder from the repository to the local directory.

2. Install npm in the local "hm08-qa-us" file.
-Open Windows Command Prompt(run cmd).
-Change directory(cd) to "hm08-qa-us" directory(Example "cd Documents\Practicum-QA\QA Project 8\hm08-qa-us").
-Run command "npm install".

3. Start the server and copy the "Server address".
-From the "Project 8: Task" page select the "Server start" button.
-After the server is running copy the address from the displayed "Server address".

4. In the "hm08-qa-us" file open the "wdio.conf.js" with Visual Studio Code and change the "baseUrl:" to the "Server address" URL that was copied then save the file.
-Open the "wdio.conf.js" file located in the "hm08-qa-us" folder in Visual Studio Code.
-In the JavaScript coding for "wdio.conf.js", find "baseUrl:" and paste the "Server address" copied(step 3.).
 Example:
 baseUrl: 'https://1370552c-6a5a-49ec-912e-6cadda8b62f9.serverhub.tripleten-services.com/',
-Save the changes to "wdio.conf.js" in Visual Studio Code(ctrl+s).

5. Open Git Bash and run the tests. 
-Open a Git Bash terminal in the root directory for the "hm08-qa-us" file.
-Enter the command "npm run wdio" into the Git Bash terminal.
-Test will run.
-Data & test results are displayed in the Git Bash terminal.