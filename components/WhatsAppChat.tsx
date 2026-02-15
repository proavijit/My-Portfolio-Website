"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, Send, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppChat() {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState("")
    const phoneNumber = "8801753400794" // Bangladesh format with country code

    const handleSendMessage = () => {
        if (message.trim()) {
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
            window.open(whatsappUrl, "_blank")
            setMessage("")
            setIsOpen(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <>
            {/* Chat Popup */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Chat Window */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Start a Conversation</h3>
                                        <p className="text-xs text-white/80">Usually replies instantly</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-white/10 rounded-full p-1 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Message Area */}
                            <div className="p-4 bg-background">
                                <div className="mb-3">
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Hi there! 👋 How can I help you today?
                                    </p>
                                </div>

                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message here..."
                                    className="w-full min-h-[100px] p-3 bg-muted border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#25D366] text-foreground placeholder:text-muted-foreground"
                                />

                                <Button
                                    onClick={handleSendMessage}
                                    disabled={!message.trim()}
                                    className="w-full mt-3 bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
                                >
                                    <Send className="h-4 w-4" />
                                    Send to WhatsApp
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: [
                        "0px 0px 0px 0px rgba(37, 211, 102, 0)",
                        "0px 0px 20px 4px rgba(37, 211, 102, 0.6)",
                        "0px 0px 0px 0px rgba(37, 211, 102, 0)"
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                aria-label="Chat on WhatsApp"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="h-6 w-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    )
}
