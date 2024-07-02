'use client'

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "./ui/button"
import Link from "next/link"
// import { getAuthSession } from "@/lib/authOptions"
import { useSession } from "next-auth/react"

export function SiteHeader() {
  const {data: session} = useSession()
  // const session = await getAuthSession()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {session ? "" : <Link href={'/sign-in'}><Button variant={'outline'}>Log In</Button></Link>}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
