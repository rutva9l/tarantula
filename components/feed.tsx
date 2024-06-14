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
import { useEffect, useState } from "react"
import axios from "axios"
import { Posts } from "@/types/post";
import { useRouter } from 'next/router';

const getData = async () => {
    const { data } = await axios.get('http://localhost:3000/api/grain')
    return data as Posts[]
}

const Feed = async ({ type }: { type: string }) => {
    const data = await getData()
    data.reverse()

    // const router = useRouter()

    // const singlePost: Posts = data.forEach(item=>{ return item.authorId = router.query.postId?})

    return (
        <>
        <Card className="col-span-5">
            <CardHeader>
                <CardTitle>Your Feed</CardTitle>
            </CardHeader>
            <CardContent>
                    <CreatePost />
                    {data.map(item => <Post type="collapsed" key={item.id} post={item} />)}
            </CardContent>
        </Card>
        </>
    )
}

export default Feed