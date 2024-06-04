import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "./ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { MessageSquare, Forward } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from './ui/button'

const Post = ({ type }: String) => {
    return (
        <Card className="mb-2">
            <CardHeader>
                <div className="flex items-center">
                    <Avatar className="mr-4">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle>session.user.name</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="cursor-pointer">
                <div>This is card content.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
            </CardContent>
            <Separator />
            {type == "expanded" ? <div className="p-3">
                <div className="grid grid-cols-9">
                    <Input
                        placeholder="Leave a comment"
                        className="w-full m-0 mb-4 col-span-8"
                    />
                    <Button className="ml-4 col-span-1 h-9"><Forward size={20} /></Button>
                </div>
                <div className="p-2">
                    <div className="flex items-center mb-2">
                        <Avatar className="mr-2">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4 className="mr-3">session.user.name</h4>
                        <div className="text-xs">4h ago</div>
                    </div>
                    <div className="text-sm text-slate-50 dark: text-zinc-900">Ye ladka andar se sad hai</div>
                </div>
                <div className="p-2">
                    <div className="flex items-center mb-2">
                        <Avatar className="mr-2">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4 className="mr-3">session.user.name</h4>
                        <div className="text-xs">4h ago</div>
                    </div>
                    <div className="text-sm text-slate-50 dark: text-zinc-900">Ye ladka andar se sad hai</div>
                </div>
            </div> : <CardFooter className="py-3">
                <div className="flex items-center cursor-pointer"><MessageSquare size={20} className="mr-2" /> 6 comments</div>
            </CardFooter>}
        </Card>
    )
}

export default Post