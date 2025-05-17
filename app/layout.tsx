import type React from "react"
import "@/app/globals.css"
import Script from "next/script"

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
      <Script src={`https://www.googletagmanager.com/gtag/js?id=AW-17088682449`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17088682449');
          `}
        </Script>
          {children}
      </body>
    </html>
  )
}
