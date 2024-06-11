"use client"

import { Separator } from "@radix-ui/react-separator"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { CalendarDays } from "lucide-react"
import Post from "./post"
import AvatarSet from "./avatar"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import axios from "axios"
import { UserType } from "@/types/user"

const getUser = async (userId: string) => {
    const { data } = await axios.get('http://localhost:3000/api/user/'+userId)
    return data as UserType
}


const Profile = async ({userId}: {userId: string}) => {
    const user = await getUser(userId)

    return (
        <Card className="col-span-5">
            <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
            <CardContent>
                <div className="mb-3 flex items-center justify-between">
                    <div>
                        <AvatarSet type="profile" user={user} />
                        <div className="mt-2 text-sm">@{user.username}</div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you&apos;re done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        defaultValue="Pedro Duarte"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Username
                                    </Label>
                                    <Input
                                        id="username"
                                        defaultValue="@peduarte"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="flex items-center">
                    <CalendarDays size={16} className="mr-1" /> <div className="text-xs text-zinc-900 dark:text-slate-50 p-2">Joined May 2024</div>
                </div>
                <Separator className="h-[1px]" />
                <div className="mt-4">{user.grains.map(item => <Post type="collapsed" key={item.id} post={item} />)}</div>
            </CardContent>
        </Card>
    )
}

export default Profile