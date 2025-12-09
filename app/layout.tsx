import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Avijit Ghosh - Full Stack JavaScript Developer",
    template: "%s | Avijit Ghosh",
  },
  description:
    "Full Stack JavaScript Developer building production-grade web apps using React, Next.js, Node.js, and MongoDB. Based in Jashore, Bangladesh.",
  keywords: [
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Avijit Ghosh", url: "https://github.com/proavijit" }],
  creator: "Avijit Ghosh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avijitghosh.dev",
    title: "Avijit Ghosh - Full Stack JavaScript Developer",
    description:
      "Full Stack JavaScript Developer building production-grade web apps using React, Next.js, Node.js, and MongoDB.",
    siteName: "Avijit Ghosh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avijit Ghosh - Full Stack JavaScript Developer",
    description:
      "Full Stack JavaScript Developer building production-grade web apps using React, Next.js, Node.js, and MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
