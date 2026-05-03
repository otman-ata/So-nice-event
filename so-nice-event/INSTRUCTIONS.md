# Contact Form Setup Instructions (Google Sheets & Gmail)

Follow these steps to connect your website's contact form to a Google Sheet and receive email notifications. This should take about 5-10 minutes.

### Step 1: Create a Google Sheet

1.  Go to [sheets.google.com](https://sheets.google.com).
2.  Click on **"+" (Blank)** to create a new spreadsheet.
3.  Give your spreadsheet a name, for example, "So Nice Event Contacts".
4.  Rename the first sheet (tab at the bottom) to **"Contact Form Leads"**. This is important as the script looks for this exact name.

### Step 2: Open the Apps Script Editor

1.  In your new Google Sheet, click on **Extensions** in the top menu.
2.  Select **Apps Script**. A new tab will open with the script editor.

### Step 3: Add the Script Code

1.  Delete any placeholder code in the script editor (e.g., `function myFunction() { ... }`).
2.  Open the `google-apps-script.js` file from the project code.
3.  **Copy the entire content** of the `google-apps-script.js` file.
4.  **Paste the copied code** into the Google Apps Script editor.
5.  **Important:** Make sure the `SHEET_NAME` and `EMAIL_ADDRESS` variables at the top of the script are correct. They should be `"Contact Form Leads"` and `"Soniceevent04@gmail.com"`.
6.  Save the script by clicking the floppy disk icon or pressing `Ctrl + S`.

### Step 4: Deploy the Script as a Web App

1.  At the top right of the Apps Script editor, click the blue **Deploy** button.
2.  Select **New deployment**.
3.  Click the gear icon next to "Select type" and choose **Web app**.
4.  In the configuration settings:
    *   **Description:** You can add a description like "Contact Form Handler".
    *   **Execute as:** Leave this as "Me".
    *   **Who has access:** Change this to **"Anyone"**. This is critical for the form to work.
5.  Click the **Deploy** button.

### Step 5: Authorize the Script

1.  Google will ask you to authorize the script's permissions. Click **Authorize access**.
2.  Choose your Google account.
3.  You might see a "Google hasn’t verified this app" warning. This is normal. Click **Advanced**, and then click **Go to [Your Project Name] (unsafe)**.
4.  Review the permissions and click **Allow**.

### Step 6: Get the Web App URL

1.  After deployment, a "Deployment successfully updated" window will appear.
2.  Copy the **Web app URL**. It will look something like this: `https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec`.
3.  **This is your script URL.**

### Step 7: Update the Website Code

1.  Open the `components/Contact.tsx` file in your project.
2.  Find the line that says:
    `const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";`
3.  **Replace `"https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"`** with the Web app URL you copied in the previous step.
4.  Save the file.

**That's it!** Your contact form is now fully configured. When someone submits the form, the entry will appear in your Google Sheet, and you will receive an email notification.
