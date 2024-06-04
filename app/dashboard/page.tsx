import DashboardLayout from "@/components/dashboard-layout";
import Feed from "@/components/feed";
import Search from "@/components/search";


export default function Dashboard() {

  return (
    <DashboardLayout first_element={<Feed type="feed" />} second_element={<Search />} />
  )
}