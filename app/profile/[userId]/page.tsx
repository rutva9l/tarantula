import DashboardLayout from "@/components/dashboard-layout"
import Profile from "@/components/profile"

const ProfilePage = ({ params }: { params: { userId: string } }) => {
    return(
        <DashboardLayout first_element={<Profile userId={params.userId} />} second_element={<></>}/>
    )
}

export default ProfilePage