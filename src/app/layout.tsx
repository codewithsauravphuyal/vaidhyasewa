import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "@/components/providers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Vaidhya Sewa - Modern Hospital Management System",
  description: "Comprehensive hospital management solution for clinics and hospitals of all sizes. Streamline OPD, IPD, billing, pharmacy, and lab operations.",
  keywords: ["hospital management system", "HMS", "healthcare software", "hospital billing", "pharmacy management", "lab management"],
  authors: [{ name: "Vaidhya Sewa" }],
  openGraph: {
    title: "Vaidhya Sewa - Hospital Management System",
    description: "Modern HMS for efficient hospital operations",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaidhya Sewa - Hospital Management System",
    description: "Modern HMS for efficient hospital operations",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable} font-poppins`}>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <Toaster />
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
