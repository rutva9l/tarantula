import Post from "./post"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Posts } from "@/types/post"
import axios from "axios"

const getData = async (id: string) => {
    const { data } = await axios.get('/api/grain/' + id)
    return data as Posts
}

const FullPost = async ({ params }: {params: any}) => {
    const data = await getData(params.postId)
    console.log(data)

    return (
        <Card className="col-span-5">
            <CardHeader>
                <CardTitle>Post</CardTitle>
            </CardHeader>
            <CardContent>
                <Post type="expanded" post={data}/>
            </CardContent>
        </Card>
    )
}

export default FullPost