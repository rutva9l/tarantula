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
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CreatePostPayload } from "@/lib/validators/post";

const CreatePost = () => {
    const [input, setInput] = useState<string>("")

    const {mutate: createPost, isSuccess} = useMutation({
        mutationFn: async () => {
            const payload: CreatePostPayload= {
                content: input
            }

            const { data } = await axios.post('/api/grain/create', payload)
            return data as String
        },
    })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={buttonVariants({ variant: "constructive" }) + " mb-4 py-3 px-4"}>Create Post</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[50%]">
                <DialogHeader>
                    <DialogTitle>Your Post</DialogTitle>
                    <DialogDescription>
                        Write down your thoughts here, let your friends know what you're thinking.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                    <Textarea onChange={(e) => setInput(e.target.value)} value={input} placeholder="Write here..." />
                </div>
                <DialogFooter>
                    <Button disabled={input.length === 0} onClick={() => createPost()}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default CreatePost