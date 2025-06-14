import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evlilik Təklifi | Xüsusi Anlarınızı Unudulmaz Edək",
  description: "Evlilik təklifi, ad günü və xüsusi tədbirlər üçün professional xidmətlər. Bakıda ən yaxşı evlilik təklifi təşkilatçıları.",
  keywords: "evlilik təklifi, evlilik təklifi təşkilatçısı, ad günü təşkilatçısı, xüsusi tədbirlər, Bakı evlilik təklifi, romantik təklif, surprise proposal, birthday surprise, marriage proposal, event organizer, Bakı tədbir təşkilatçısı, Khalili Plaza, Əhməd Rəcəbli küçəsi",
  authors: [{ name: "Evlilik Təklifi" }],
  creator: "Evlilik Təklifi",
  publisher: "Evlilik Təklifi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://evlilikteklifi.az"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Evlilik Təklifi | Xüsusi Anlarınızı Unudulmaz Edək",
    description: "Evlilik təklifi, ad günü və xüsusi tədbirlər üçün professional xidmətlər. Bakıda ən yaxşı evlilik təklifi təşkilatçıları.",
    url: "https://evlilikteklifi.az",
    siteName: "Evlilik Təklifi",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "https://evlilikteklifi.az/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Evlilik Təklifi - Xüsusi Anlarınızı Unudulmaz Edək",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evlilik Təklifi | Xüsusi Anlarınızı Unudulmaz Edək",
    description: "Evlilik təklifi, ad günü və xüsusi tədbirlər üçün professional xidmətlər. Bakıda ən yaxşı evlilik təklifi təşkilatçıları.",
    images: ["https://evlilikteklifi.az/og-image.jpg"],
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
