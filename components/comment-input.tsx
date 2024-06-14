import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Forward } from "lucide-react"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { CreateCommentPayload } from "@/lib/validators/comment"
import axios from "axios"
import { useRouter } from "next/navigation"

const CommentInput = ({ id }: { id: string }) => {
    const [input, setInput] = useState("this is comment")
    const router = useRouter()

    const { mutate: createComment, isSuccess } = useMutation({
        mutationFn: async () => {
            const payload: CreateCommentPayload = {
                content: input,
                grainId: id,
            }

            const { data } = await axios.post('/api/comment/create', payload)
            return data as String
        },
    })

    const handleSubmit = () => {
        createComment()
        router.refresh()
    }

    return (
        <div className="grid grid-cols-9">
            <Input
                onChange={(e) => setInput(e.target.value)}
                placeholder="Leave a comment"
                className="col-span-8 m-0 mb-4 w-full"
            />
            <Button className="col-span-1 ml-4 h-9" disabled={input.length === 0} onClick={handleSubmit}><Forward size={20} /></Button>
        </div>
    )
}

export default CommentInput