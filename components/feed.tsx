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
import CreatePost from "./create-post";

const Feed = ({ type }: string) => {
    return (
        <Card className="col-span-5">
            <CardHeader>
                <CardTitle>{type == "feed" ? "Your Feed" : "Post"}</CardTitle>
            </CardHeader>
            <CardContent>
                {type == "feed" ? <>
                    <CreatePost />
                    <Post type="collapsed" />
                    <Post type="collapsed" /></> : <Post type="expanded" />
                }
            </CardContent>
        </Card>
    )
}

export default Feed