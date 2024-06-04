// "use client"

import { siteConfig } from "@/config/site"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SignIn } from "@/components/signIn"
import { getAuthSession } from "@/lib/authOptions"

const IndexPage = async () => {
  const session = await getAuthSession()
  console.log(session)

  return (
    <section className="container w-full h-full flex justify-center items-center pb-8 pt-6 md:py-10">
      <div>Sign in</div>
      {session ?  "This is dashboard" : <SignIn />}
      {/* <SignIn /> */}
    </section>
  )
}

export default IndexPage