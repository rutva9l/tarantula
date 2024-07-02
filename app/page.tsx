import { SignIn } from "@/components/signIn"
import { getAuthSession } from "@/lib/authOptions"
import DashboardLayout from "@/components/dashboard-layout"
import Feed from "@/components/feed"
import Search from "@/components/search"
import HeroPage from "@/components/hero"

const IndexPage = async () => {
  const session = await getAuthSession()

  return (
    <>
     {/* <section className={session ? "": "container flex items-center justify-center h-[90%] w-full px-0"}> */}
      {/* @ts-expect-error Server Component */}
      {session ?  <DashboardLayout first_element={<Feed type="feed" />} second_element={<Search />} />: <HeroPage />}
    {/* </section> */}
   </>
  )
}

export default IndexPage