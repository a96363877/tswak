import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "متجري - موقع التسوق الإلكتروني",
  description: "متجرك الإلكتروني الأول للتسوق بثقة وأمان مع تشكيلة واسعة من المنتجات عالية الجودة",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
          {children}
      </body>
    </html>
  )
}
