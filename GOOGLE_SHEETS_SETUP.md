# Google Sheets Integration - Environment Setup

Add these variables to your `.env` file:

```env
# Google Sheets Configuration
GOOGLE_SHEET_ID=1k-6gihmXZS4Mq_ukWWJuXwsNoWCj0ihZxgyRSADa3dw

# Google Service Account Credentials (JSON string)
# Copy the entire contents of your utopian-datum-387419-07134fe55c22.json file
# and paste it as a single line here (remove all line breaks)
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"your-project-id"...}
```

## Steps to Complete Setup:

1. **Copy Service Account JSON**: 
   - Open `c:\Users\Avijit~Ghosh\Downloads\utopian-datum-387419-07134fe55c22.json`
   - Copy the ENTIRE contents
   - Minify it to a single line (remove all line breaks)
   - Paste it as the value for `GOOGLE_SERVICE_ACCOUNT_KEY` in your `.env` file

2. **Share Google Sheet**:
   - Open your Google Sheet: https://docs.google.com/spreadsheets/d/1k-6gihmXZS4Mq_ukWWJuXwsNoWCj0ihZxgyRSADa3dw/edit
   - Click "Share" button
   - Find the `client_email` from your service account JSON (should look like: `something@utopian-datum-387419.iam.gserviceaccount.com`)
   - Add that email as an Editor to your Google Sheet

3. **Set up Sheet Headers** (optional but recommended):
   - In your Google Sheet, add these headers in row 1:
     - A1: `Timestamp`
     - B1: `Name`
     - C1: `Email`
     - D1: `Subject`
     - E1: `Message`
