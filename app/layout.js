import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio",
  description: "FrontEnd Developer Portfolio using NEXT.js and JavaScript"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans select-none bg-black`}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}