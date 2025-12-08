import { NextRequest, NextResponse } from "next/server"
import { ContactFormData } from "@/types"
import { appendToSheet } from "@/lib/googleSheets"

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const limit = rateLimitMap.get(ip)

    if (!limit || now > limit.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
        return true
    }

    if (limit.count >= 3) {
        // Max 3 requests per minute
        return false
    }

    limit.count++
    return true
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
    return input.trim().slice(0, 1000) // Limit length and trim whitespace
}

export async function POST(request: NextRequest) {
    try {
        // Get IP for rate limiting
        const ip = request.headers.get("x-forwarded-for") || "unknown"

        // Check rate limit
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            )
        }

        // Parse and validate request body
        const body: ContactFormData = await request.json()

        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            )
        }

        // Validate email format
        if (!validateEmail(body.email)) {
            return NextResponse.json(
                { error: "Invalid email address." },
                { status: 400 }
            )
        }

        // Sanitize inputs
        const sanitizedData = {
            name: sanitizeInput(body.name),
            email: sanitizeInput(body.email),
            subject: body.subject ? sanitizeInput(body.subject) : "",
            message: sanitizeInput(body.message),
        }

        // TODO: In production, implement actual email sending
        // Example using Nodemailer or Resend:
        // await sendEmail({
        //   to: "avijitghosh2268@gmail.com",
        //   from: sanitizedData.email,
        //   subject: sanitizedData.subject || "New Contact Form Submission",
        //   text: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\nMessage:\n${sanitizedData.message}`,
        // })

        // Save to Google Sheets
        try {
            await appendToSheet(sanitizedData)
            console.log("Contact form saved to Google Sheets:", sanitizedData)
        } catch (sheetError) {
            // Log the error but don't fail the request
            // This ensures the user still gets a success message even if Sheets fails
            console.error("Failed to save to Google Sheets:", sheetError)
        }

        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully!",
            },
            { status: 200 }
        )
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json(
            { error: "An error occurred. Please try again later." },
            { status: 500 }
        )
    }
}
