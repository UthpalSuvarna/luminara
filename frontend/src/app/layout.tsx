import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luminara - Suicide Prevention & Crisis Support",
  description:
    "Providing hope, support, and resources for those in crisis and their loved ones. 24/7 crisis support available.",
  keywords: "suicide prevention, crisis support, mental health, counseling, support groups",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
