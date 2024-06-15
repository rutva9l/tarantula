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
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { EditProfilePayload } from "@/lib/validators/editProfile"
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from "next/navigation"

const EditProfile = () => {
    const [name, setName] = useState<string>("")
    const [username, setUserName] = useState<string>("")
    const {data: session} = useSession()
    const [open, setOpen] = useState(false)
    const { toast } = useToast()
    const router = useRouter()

    const { mutate: edit, isSuccess } = useMutation({
        mutationFn: async () => {
            const payload: EditProfilePayload = {
                name: name, 
                username: username
            }

            const { data } = await axios.patch(('/api/user/'+session?.user.id), payload)
            return data as String
        },
    })

    const handleClick = () => {
        setOpen(false)
        edit()
        toast({
            title: "Profile details updated",
            description: "Click here to view.",
            action: (
                <ToastAction onClick={() => {router.refresh()}} altText="Goto schedule to undo">View</ToastAction>
            ),
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
                            onChange={e => setName(e.target.value)}
                            id="name"
                            placeholder="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            onChange={e => setUserName(e.target.value)}
                            id="username"
                            placeholder="peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button disabled={(name.length === 0) && (username.length === 0)} onClick={handleClick}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditProfile