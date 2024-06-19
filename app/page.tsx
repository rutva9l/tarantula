import { SignIn } from "@/components/signIn"
import { getAuthSession } from "@/lib/authOptions"
import DashboardLayout from "@/components/dashboard-layout"
import Feed from "@/components/feed"
import Search from "@/components/search"

const IndexPage = async () => {
  const session = await getAuthSession()

  return (
    <section className={session ? "": "container flex items-center justify-center h-full w-full px-0"}>
      {/* @ts-expect-error Server Component */}
      {session ?  <DashboardLayout first_element={<Feed type="feed" />} second_element={<Search />} />: <SignIn />}
    </section>
  )
}

export default IndexPage