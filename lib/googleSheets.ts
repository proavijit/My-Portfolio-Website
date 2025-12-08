import { google } from "googleapis"

const SHEET_ID = process.env.GOOGLE_SHEET_ID
const CREDENTIALS = process.env.GOOGLE_SERVICE_ACCOUNT_KEY

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export async function appendToSheet(data: ContactFormData) {
    try {
        if (!SHEET_ID) {
            throw new Error("GOOGLE_SHEET_ID is not configured")
        }

        if (!CREDENTIALS) {
            throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY is not configured")
        }

        // Parse the service account credentials
        const credentials = JSON.parse(CREDENTIALS)

        // Create auth client
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        })

        const sheets = google.sheets({ version: "v4", auth })

        // Prepare the row data with formatted date and time
        const now = new Date()

        // Format date as DD/MM/YYYY
        const date = now.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })

        // Format time as HH:MM:SS AM/PM
        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        })

        const values = [
            [
                date,
                time,
                data.name,
                data.email,
                data.subject || "N/A",
                data.message,
            ],
        ]

        // Append the data to the sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: "Sheet1!A:F", // Adjust sheet name if needed
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values,
            },
        })

        console.log("Successfully saved to Google Sheets:", response.data)
        return { success: true, data: response.data }
    } catch (error) {
        console.error("Error saving to Google Sheets:", error)
        throw error
    }
}
