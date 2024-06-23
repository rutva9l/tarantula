"use client"

import { Separator } from "./ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { CalendarDays } from "lucide-react"
import Post from "./post"
import AvatarSet from "./avatar"
import axios from "axios"
import { UserType } from "@/types/user"
import CreatePost from "./create-post"
import EditProfile from "./edit-profile"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react";
import { Button } from './ui/button'
import { useState } from "react"

const getUser = async (userId: string) => {
    const { data } = await axios.get('http://localhost:3000/api/user/' + userId)
    return data as UserType
}


const Profile = ({ userId }: { userId: string }) => {
    // const user = await getUser(userId)
    const [created, setCreated] = useState<boolean>(false)
    const { data: session } = useSession()

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('/api/user/' + userId).then((res) =>
                res.json(),
            ),
    })

    const user: UserType = data
    console.log(user)

    const handleClick = () => {
        setCreated(!created)
        console.log(created)
    }

    // if (postQuery.isError) return <h1>Error loading data!!!</h1>;ß
    if (isLoading) return <Card><CardHeader>
        <CardTitle>
            Loading...
        </CardTitle>
    </CardHeader></Card>;

    if (!isLoading) return <Card className="col-span-5">
        <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
        <CardContent>
            <div className="mb-3 flex items-center justify-between">
                <div>
                    <AvatarSet type="profile" user={user} />
                    <div className="flex items-center mt-2">
                        <div className="text-sm mr-4">@{user.username}</div>
                        <div className="flex items-center">
                            <CalendarDays size={14} className="text-zinc-900 dark:text-neutral-400" /> <div className="text-xs text-zinc-900 dark:text-neutral-400 p-2">Joined May 2024</div>
                        </div>
                    </div>
                </div>
                {session?.user.id == user.id ? <EditProfile /> : <Button variant="outline">Follow</Button>}
            </div>
            <Separator className="h-[1px] mb-4" />
            {session?.user.id == user.id ? <CreatePost created={created} onClick={handleClick} /> : ""}
            <div>{user.grains.map(item => <Post type="collapsed" key={item.id} post={item} />)}</div>
        </CardContent>
    </Card>;
}

export default Profile