'use client'

import Post from "./post"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Posts } from "@/types/post"
import { useQuery } from "@tanstack/react-query"

const FullPost = ({ params }: { params: any }) => {
    // const data = await getData(params.postId)

    const { isLoading, error, data } = useQuery({
        queryKey: ['singlePost'],
        queryFn: () =>
            fetch('/api/grain/' + params.postId).then((res) =>
                res.json(),
            ),
    })

    console.log(data)

    if (isLoading) return <Card className="col-span-5">Loading</Card>;

    if (!isLoading) return <Card className="col-span-5">
        <CardHeader>
            <CardTitle>Post</CardTitle>
        </CardHeader>
        <CardContent>
            <Post type="expanded" post={data} />
        </CardContent>
    </Card>;
}

export default FullPost