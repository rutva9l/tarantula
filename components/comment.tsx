import AvatarSet from "./avatar"

const Comment = () => {
    return (
        <div className="p-2">
            <AvatarSet type="comment" />
            <div className="text-sm text-zinc-900 dark:text-slate-50">Ye ladka andar se sad hai</div>
        </div>
    )
}

export default Comment