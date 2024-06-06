'use client'

import { SiteHeader } from "@/components/site-header";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button";
import Post from "@/components/post";
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

const Feed = ({ type }: String) => {
    return (
        <Card className="col-span-5">
            <CardHeader>
                <CardTitle>{type == "feed" ? "Your Feed" : "Post"}</CardTitle>
            </CardHeader>
            <CardContent>
                {type == "feed" ? <>
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
                                <Textarea placeholder="Write here..." />
                            </div>
                            <DialogFooter>
                                <Button type="submit">Create</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Post type="collapsed" />
                    <Post type="collapsed" /></> : <Post type="expanded" />
                }
            </CardContent>
        </Card>
    )
}

export default Feed