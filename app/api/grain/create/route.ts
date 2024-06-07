import { getAuthSession } from '@/lib/authOptions'
import { db } from '@/lib/db'
import { PostValidator } from '@/lib/validators/post'
import { z } from 'zod'

export async function POST(req: Request) {
    try {
        const session = await getAuthSession()

        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }

        const body = await req.json()
        const { content } = PostValidator.parse(body)

        console.log({
            authorId: session.user.id,
            content,
        })

        const post = await db.grain.create({
            data: {
                content,
                authorId: session.user.id,
            },
        })

        return new Response(JSON.stringify(post.content))
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(error.message, { status: 422 })
        }

        return new Response(error ? error.message : "Could not post", { status: 500 })
    }
}