import { CommentType } from "./comment"

export interface Posts {
    id: string,
    content: any,
    authorId: string,
    createdAt: string,
    updatedAt: string,
    comments: CommentType[]
}