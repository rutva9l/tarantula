import { CommentType } from "@/types/comment"
import AvatarSet from "./avatar"

const Comment = ({comment}: {comment: CommentType}) => {
    return (
        <div className="p-2">
            <AvatarSet type="comment" user={comment.author}/>
            <div className="text-sm text-zinc-900 dark:text-slate-50 p-2">{comment.content}</div>
        </div>
    )
}

export default Comment