'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Post from "@/components/post";
import CreatePost from "./create-post";
import axios from "axios"
import { Posts } from "@/types/post";

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