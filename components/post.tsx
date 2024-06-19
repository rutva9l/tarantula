"use client"

import { Card, CardHeader, CardContent, CardFooter } from "./ui/card"
import { Separator } from "./ui/separator"
import { MessageSquare, Forward } from "lucide-react"
import AvatarSet from "./avatar"
import Comment from "./comment"
import Link from "next/link"
import { Posts } from "@/types/post"
import CommentInput from "./comment-input"
import { UserType } from "@/types/user"
import { FC } from "react"

interface PostProps{
    post: Posts & {
        author: UserType
    },
    type: String
}

const Post: FC<PostProps> = ({ type, post }) => {

    return (
        <Card className="mb-2">
            <CardHeader>
                <AvatarSet type="profile" user={post.author} />
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
                {post.comments.map(item => <Comment key={item.id} comment={item} />)}
            </div> : <CardFooter className="py-3">
                <Link href={"/post/"+post.id}>
                    <div className="flex cursor-pointer items-center"><MessageSquare size={20} className="mr-2" /> {post.comments ? post.comments.length: "0"} comments</div>
                </Link>
            </CardFooter>}
        </Card>
    )
}

export default Post