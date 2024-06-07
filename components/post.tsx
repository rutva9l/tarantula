import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "./ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { MessageSquare, Forward } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from './ui/button'
import AvatarSet from "./avatar"
import Comment from "./comment"
import Link from "next/link"

const Post = ({ type }: string) => {
    return (
        <Card className="mb-2">
            <CardHeader>
                <AvatarSet type="profile"/>
            </CardHeader>
            <Link href="/post">
                <CardContent className="cursor-pointer">
                    <div>This is card content.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                </CardContent>
            </Link>
            <Separator />
            {type == "expanded" ? <div className="p-3">
                <div className="grid grid-cols-9">
                    <Input
                        placeholder="Leave a comment"
                        className="w-full m-0 mb-4 col-span-8"
                    />
                    <Button className="ml-4 col-span-1 h-9" size="icon"><Forward size={20} /></Button>
                </div>
                <Comment />
                <Comment />
            </div> : <CardFooter className="py-3">
                <Link href="/post">
                    <div className="flex items-center cursor-pointer"><MessageSquare size={20} className="mr-2" /> 6 comments</div>
                </Link>
            </CardFooter>}
        </Card>
    )
}

export default Post