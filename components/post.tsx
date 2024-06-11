"use client"

import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "./ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { MessageSquare, Forward } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from './ui/button'
import AvatarSet from "./avatar"
import Comment from "./comment"
import Link from "next/link"
import { Posts } from "@/types/post"
import axios from "axios"
import CommentInput from "./comment-input"

const getUser = async (userId: string) => {
    const { data } = await axios.get('http://localhost:3000/api/user/'+userId)
    return data
}

const Post = async ({ type, post }: { type: String, post: Posts}) => {
    const user = await getUser(post.authorId)

    return (
        <Card className="mb-2">
            <CardHeader>
                <AvatarSet type="profile" user={user} />
            </CardHeader>
            <Link href={"/post/"+post.id}>
                <CardContent className="cursor-pointer">
                    <div>{post.content}
                    </div>
                </CardContent>
            </Link>
            <Separator />
            {type == "expanded" ? <div className="p-3">
                <CommentInput id={post.id} />
                <Comment />
                <Comment />
            </div> : <CardFooter className="py-3">
                <Link href="/post">
                    <div className="flex cursor-pointer items-center"><MessageSquare size={20} className="mr-2" /> 6 comments</div>
                </Link>
            </CardFooter>}
        </Card>
    )
}

export default Post