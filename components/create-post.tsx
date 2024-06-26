"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "./ui/textarea";
import { Button, buttonVariants } from "./ui/button";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CreatePostPayload } from "@/lib/validators/post";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"


const CreatePost = ({ created, onClick }: { created: boolean, onClick: () => void }) => {
    const [input, setInput] = useState<string>("")
    const [open, setOpen] = useState(false)
    const { toast } = useToast()
    const router = useRouter()
    const queryClient = useQueryClient()

    const { mutate: createPost, isSuccess } = useMutation({
        mutationFn: async () => {
            const payload: CreatePostPayload = {
                content: input
            }

            const { data } = await axios.post('/api/grain/create', payload)
            return data as String
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['postData'] })
        }
    })

    const handleClick = () => {
        const res = createPost()
        setOpen(false)
        onClick()
        toast({
            title: "Feed updated",
            description: "Click here to view.",
            action: (
                <ToastAction onClick={() => { router.refresh() }} altText="Goto schedule to undo">View</ToastAction>
            ),
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className={buttonVariants({ variant: "constructive" }) + " mb-4"}>Create Post</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Your Post</DialogTitle>
                    <DialogDescription>
                        Write down your thoughts here, let your friends know what you&apos;re thinking.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                    <Textarea onChange={(e) => setInput(e.target.value)} value={input} placeholder="Write here..." />
                </div>
                <DialogFooter>
                    <Button disabled={input.length === 0} onClick={handleClick}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default CreatePost