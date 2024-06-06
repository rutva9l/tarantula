import DashboardLayout from "@/components/dashboard-layout"
import Profile from "@/components/profile"

const ProfilePage = () => {
    return(
        <DashboardLayout first_element={<Profile />} second_element={<></>}/>
    )
}

export default ProfilePage