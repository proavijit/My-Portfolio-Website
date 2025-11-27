"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactFormData } from "@/types"
import { Loader2 } from "lucide-react"

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null
        message: string
    }>({ type: null, message: "" })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: null, message: "" })

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: "Message sent successfully! I'll get back to you within 48 hours.",
                })
                setFormData({ name: "", email: "", subject: "", message: "" })
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.error || "Failed to send message. Please try again.",
                })
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "An error occurred. Please try again later.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                    I reply to all messages within 48 hours
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Your name"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            type="text"
                            value={formData.subject}
                            onChange={(e) =>
                                setFormData({ ...formData, subject: e.target.value })
                            }
                            placeholder="What's this about?"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                            id="message"
                            required
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                            placeholder="Tell me about your project or inquiry..."
                            rows={6}
                        />
                    </div>

                    {submitStatus.type && (
                        <div
                            className={`p-4 rounded-md ${submitStatus.type === "success"
                                    ? "bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200"
                                    : "bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-200"
                                }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
