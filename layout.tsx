import type React from "react"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>برای نازی با عشق</title>
      </head>
      <body className="font-['Vazirmatn', system-ui, sans-serif]">{children}</body>
    </html>
  )
}

