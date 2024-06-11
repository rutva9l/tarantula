import { z } from 'zod'

export const CommentValidator = z.object({
  content: z.string(),
  grainId: z.string()
})

export type CreateCommentPayload = z.infer<typeof CommentValidator>