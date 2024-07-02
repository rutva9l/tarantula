import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Providers from "@/components/Providers"
import { Toaster } from "@/components/ui/toaster"
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "h-screen bg-background font-sans antialiased",
            fontSans.className
          )}
        >

            <Providers>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="h-ful relative flex flex-col">
                  <SiteHeader />
                  <Toaster />
                  <div className="h-full flex-1">{children}</div>
                </div>
                <TailwindIndicator />
              </ThemeProvider>
            </Providers>

        </body>
      </html>
    </>
  )
}
