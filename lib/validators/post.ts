import { z } from 'zod'

export const PostValidator = z.object({
  content: z.any(),
})

export type CreatePostPayload = z.infer<typeof PostValidator>