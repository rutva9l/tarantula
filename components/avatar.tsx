import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { CardTitle } from "./ui/card"
import Link from "next/link"

const AvatarSet = (props: any) => {

    return (
        <Link href={props.user ? ('/profile/'+props.user.id) : '/'}>
            <div className={"flex items-center cursor-pointer" + (props.type == "comment" ? "mb-2" : "")}>
                <Avatar className={"relative flex shrink-0 overflow-hidden rounded-full " + (props.type == "comment" ? "mr-2 h-8 w-8" : "mr-4 h-10 w-10")}>
                    <AvatarImage className="aspect-square h-full w-full" src={props.user ? props.user.image : "https://github.com/shadcn.png"} />
                    <AvatarFallback className="AvatarFallback">CN</AvatarFallback>
                </Avatar>
                {props.type == "comment" ? <div className="mr-2 text-sm">{props.user ? props.user.name : "default"}</div> : <CardTitle>{props.user ? props.user.name : "default"}</CardTitle>}
                {props.type == "comment" ? <div className="text-xs">4h ago</div> : ""}
            </div>
        </Link>
    )
}

export default AvatarSet