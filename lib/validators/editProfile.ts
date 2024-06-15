import { z } from 'zod'

export const ProfileValidator = z.object({
  name: z.string(),
  username: z.string()
})

export type EditProfilePayload = z.infer<typeof ProfileValidator>