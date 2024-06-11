import { db } from '@/lib/db'
import { CommentValidator } from '@/lib/validators/comment'
import { z } from 'zod'
import { getAuthSession } from '@/lib/authOptions'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { grainId, content} = CommentValidator.parse(body)

    const session = await getAuthSession()

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 })
    }

    // if no existing vote, create a new vote
    await db.comment.create({
      data: {
        content,
        grainId,
        authorId: session.user.id,
      },
    })

    return new Response('OK')
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 })
    }

    return new Response(
      'Could not post to subreddit at this time. Please try later',
      { status: 500 }
    )
  }
}