import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const SITE_URL = "https://www.abercrombiediscounts.com"
const SITE_NAME = "Abercrombie Discounts"
const TITLE = "The Abercrombie Discounts They Don't Advertise"
const DESCRIPTION =
  "Discover how shoppers are unlocking hidden discounts on Abercrombie denim, sweaters, dresses, and fragrance. Complete 5+ deals in five simple steps and get your discount delivered straight to your inbox."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Abercrombie discount code",
    "Abercrombie promo code",
    "Abercrombie & Fitch discounts",
    "Abercrombie deals",
    "Abercrombie rewards program",
    "Abercrombie jeans discount",
    "Abercrombie sweaters and outerwear deals",
    "Abercrombie dresses sale",
    "Abercrombie fragrance savings",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Flat-lay of light-wash baggy jeans, a cream cable-knit sweater, a black slip dress, a brown vegan leather jacket, a cologne bottle, and a leather belt on a deep navy background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
}

export const viewport: Viewport = {
  themeColor: "#033B7B",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
