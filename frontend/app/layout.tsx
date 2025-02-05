import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "De Flamingo - Outdoor Centrum",
  description: "Experience unforgettable outdoor adventures at De Flamingo Outdoor Centrum.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  )
}

