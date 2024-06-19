import {
    Trash2,
    EllipsisVertical,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function DropdownMenuDemo({ id }: { id: string }) {
    const queryClient = useQueryClient()
    const {mutate: delPost} = useMutation({
        mutationFn: () =>
            fetch('/api/grain/' + id, { method: 'DELETE' }).then((res) =>
                res.json(),
            ),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['postData'] })
        },
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <EllipsisVertical className="cursor-pointer" size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem onClick={() => delPost()}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
