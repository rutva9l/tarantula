"use client"

import { Separator } from "@radix-ui/react-separator"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { CalendarDays } from "lucide-react"
import Post from "./post"
import AvatarSet from "./avatar"
import axios from "axios"
import { UserType } from "@/types/user"
import { useSession } from "next-auth/react"
import CreatePost from "./create-post"
import { useQuery } from '@tanstack/react-query';
import EditProfile from "./edit-profile"

const getUser = async (userId: string) => {
    const { data } = await axios.get('http://localhost:3000/api/user/'+userId)
    return data as UserType
}


const Profile = async ({ userId }: { userId: string }) => {
    const user = await getUser(userId)
    // const { data: session } = useSession()

    // const postQuery = useQuery({
    //     queryKey: ['posts'],
    //     queryFn: async () => {
    //         const response = await axios.get('http://localhost:3000/api/user/' + userId);
    //         const data = await response.data;
    //         return data;
    //     }
    // });

    // if (postQuery.isLoading) return <h1>Loading....</h1>;
    // if (postQuery.isError) return <h1>Error loading data!!!</h1>;

    // const user: UserType = postQuery.data
    // console.log(user)

    return (
        <Card className="col-span-5">
            <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
            <CardContent>
                <div className="mb-3 flex items-center justify-between">
                    <div>
                        <AvatarSet type="profile" user={user} />
                        <div className="mt-2 text-sm">@{user.username}</div>
                    </div>
                    <EditProfile />
                </div>
                <div className="flex items-center">
                    <CalendarDays size={16} className="mr-1" /> <div className="text-xs text-zinc-900 dark:text-slate-50 p-2">Joined May 2024</div>
                </div>
                <Separator className="h-[1px]" />
                {/* <CreatePost /> */}
                <div className="mt-4">{user.grains.map(item => <Post type="collapsed" key={item.id} post={item} />)}</div>
            </CardContent>
        </Card>
    )
}

export default Profile