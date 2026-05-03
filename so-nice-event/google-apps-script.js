// 1. Create a new Google Sheet.
// 2. Go to Extensions -> Apps Script.
// 3. Paste this entire script into the editor, replacing any existing code.
// 4. Set the `SHEET_NAME` and `EMAIL_ADDRESS` variables below.
// 5. Click Deploy -> New deployment.
// 6. Select "Web app" as the type.
// 7. In the "Who has access" dropdown, select "Anyone".
// 8. Click "Deploy".
// 9. Authorize the script when prompted.
// 10. Copy the Web app URL provided and paste it into the `SCRIPT_URL` variable in the `Contact.tsx` file.

const SHEET_NAME = "Contact Form Leads"; // Change this to your sheet name
const EMAIL_ADDRESS = "Soniceevent04@gmail.com"; // Change this to your email address

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // Create header row if it doesn't exist
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
    }
    
    const name = e.parameter.name;
    const email = e.parameter.email;
    const message = e.parameter.message;
    const timestamp = new Date();

    // Append form data to the sheet
    sheet.appendRow([timestamp, name, email, message]);

    // Send email notification
    sendEmailNotification(name, email, message);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", message: "Form submitted successfully" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(name, email, message) {
  const subject = "New Contact Form Submission from " + name;
  const body = 
    "You have a new message from your website's contact form:\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Message:\n" + message;

  MailApp.sendEmail(EMAIL_ADDRESS, subject, body);
}
