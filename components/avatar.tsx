import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { CardTitle } from "./ui/card"
import { getAuthSession } from "@/lib/authOptions"

const AvatarSet = async (props: any) => {
    const session = {
        user: {
            name: 'Rutva L',
            email: 'uratva9@gmail.com',
            image: 'https://lh3.googleusercontent.com/a/ACg8ocLANmPvgEJ39uIMBlu8vBK1NljKt1R2FnhTfvJJ-J6ahvqCIQ=s96-c',
            id: 'clx365srs0000scp0wirvgene',
            username: 'ZmXvv01Yx5'
        }
    }

    return (
        <div className={"flex items-center " + (props.type == "comment" ? "mb-2" : "")}>
            <Avatar className={"relative flex shrink-0 overflow-hidden rounded-full " + (props.type == "comment" ? "mr-2 h-8 w-8" : "mr-4 h-10 w-10")}>
                <AvatarImage className="aspect-square h-full w-full" src={session!.user.image} />
                <AvatarFallback className="AvatarFallback">CN</AvatarFallback>
            </Avatar>
            {props.type == "comment" ? <div className="mr-2 text-sm">{session!.user.name}</div> : <CardTitle>{session!.user.name}</CardTitle>}
            {props.type == "comment" ? <div className="text-xs">4h ago</div> : ""}
        </div>
    )
}

export default AvatarSet