import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const inter = Poppins({ weight: '400', subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luminara: A Mental Health & Wellness Hub",
  description:
    "Luminara is a Suicide Lifeline Initiative, a non-profit unit ,committed to suicide prevention and mental health advocacy. It was born from years of listening to survivors, families, and those in distress, and built with care, empathy, and hope.",
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
