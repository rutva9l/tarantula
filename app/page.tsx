// "use client"

import { siteConfig } from "@/config/site"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SignIn } from "@/components/signIn"
import { getAuthSession } from "@/lib/authOptions"
import DashboardLayout from "@/components/dashboard-layout"
import Feed from "@/components/feed"
import Search from "@/components/search"
import { useEffect, useState } from "react"

const IndexPage = async () => {
  const session = await getAuthSession()

  return (
    <section className="container flex h-full w-full items-center justify-center px-0">
      {session ?  <DashboardLayout user={session.user} first_element={<Feed type="feed" />} second_element={<Search />} />: <SignIn />}
    </section>
  )
}

export default IndexPage