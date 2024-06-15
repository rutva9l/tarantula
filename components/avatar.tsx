import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { CardTitle } from "./ui/card"
import Link from "next/link"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card"
import { CalendarDays } from "lucide-react"

const AvatarSet = (props: any) => {
    const date = props.user.createdAt.split("-")


    return (
        <HoverCard>
            <Link href={props.user ? ('/profile/' + props.user.id) : '/'}>
                <HoverCardTrigger asChild>
                    <div className={"flex items-center cursor-pointer" + (props.type == "comment" ? "mb-2" : "")}>
                        <Avatar className={"relative flex shrink-0 overflow-hidden rounded-full " + (props.type == "comment" ? "mr-2 h-8 w-8" : "mr-4 h-10 w-10")}>
                            <AvatarImage className="aspect-square h-full w-full" src={props.user ? props.user.image : "https://github.com/shadcn.png"} />
                            <AvatarFallback className="AvatarFallback">CN</AvatarFallback>
                        </Avatar>
                        {props.type == "comment" ? <div className="mr-2 text-sm">{props.user ? props.user.name : "default"}</div> : <CardTitle>{props.user ? props.user.name : "default"}</CardTitle>}
                        {props.type == "comment" ? <div className="text-xs">4h ago</div> : ""}
                    </div>
                </HoverCardTrigger>
            </Link>
            <HoverCardContent>
                <div className="flex justify-between">
                    <Avatar className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10}">
                        <AvatarImage className="aspect-square h-full w-full" src={props.user ? props.user.image : "https://github.com/shadcn.png"} />
                        <AvatarFallback className="AvatarFallback">CN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <div className="flex items-center">
                            <h4 className="text-sm font-semibold mr-2">{props.user.name}</h4>
                            <div className="text-xs">@{props.user.username}</div>
                        </div>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Joined December {date[0]}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default AvatarSet