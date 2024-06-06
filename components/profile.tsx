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


const Profile = () => {
    return (
        <Card className="col-span-5">
            <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
            <CardContent>
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <AvatarSet type="profile" />
                        <div className="text-sm mt-2">@session.user.username</div>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
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
                    <CalendarDays size={16} className="mr-1" /> <div className="text-xs text-slate-200">Joined May 2024</div>
                </div>
                <Separator className="h-[1px]" />
                <Post type="feed" />
                <Post type="feed" />
            </CardContent>
        </Card>
    )
}

export default Profile