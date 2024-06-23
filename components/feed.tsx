'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Post from "@/components/post";
import CreatePost from "./create-post";
import { Posts } from "@/types/post";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Feed = ({ type }: { type: string }) => {
    const [created, setCreated] = useState<boolean>(false)
    // const data = await getData()

    const { isLoading, error, data } = useQuery({
        queryKey: ['postData'],
        queryFn: () =>
            fetch('/api/grain').then((res) =>
                res.json(),
            ),
    })

    const posts: Posts[] = data
    // posts.reverse()
    console.log(posts)

    const handleClick = () => {
        setCreated(!created)
    }

    // if (postQuery.isError) return <h1>Error loading posts!!!</h1>;ß

    // const router = useRouter()

    // const singlePost: Posts = posts.forEach(item=>{ return item.authorId = router.query.postId?})
    if (isLoading) return <Card className="col-span-5"><CardHeader>
        <CardTitle>
            Loading...
        </CardTitle>
    </CardHeader></Card>;

    if (!isLoading) return <Card className="col-span-5 max-h-full relative">
        <CardHeader>
            <CardTitle>Your Feed</CardTitle>
        </CardHeader>
        <CardContent className="max-h-full overflow-hidden">
            <CreatePost created={created} onClick={handleClick} />
            {posts.slice(0).reverse().map(item => <Post type="collapsed" key={item.id} post={item} />)}
        </CardContent>
    </Card>;

}

export default Feed