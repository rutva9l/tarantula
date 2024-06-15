import { db } from "@/lib/db";
import { ProfileValidator } from "@/lib/validators/editProfile";
import { getAuthSession } from "@/lib/authOptions";
import {z} from 'zod'

export async function GET(
    request: Request,
    { params }: { params: { userId: string } }
) {
    try {
        const { userId } = params;
        const user = await db.user.findFirst({
            where: {
                id: {
                    equals: userId
                }
            },
            include: {
                grains: {
                    include: {
                        author: true
                    }
                }
            }
        })
        return new Response(JSON.stringify(user))
    } catch (error) {
        return new Response("Could not retrieve.", { status: 500 })

    }
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json()

        const { name, username } = ProfileValidator.parse(body)

        const session = await getAuthSession()

        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }

        // if no existing vote, create a new vote
        if(name.length > 0 && username.length === 0) {
            await db.user.update({
                where: {
                    id: session.user.id
                },
                data: {
                    name: name
                },
            })
        }
        else if(username.length > 0 && name.length === 0 ) { 
            await db.user.update({
                where: {
                    id: session.user.id
                },
                data: {
                    username: username
                },
            })
        }
        else if(name.length > 0 && username.length > 0){
            await db.user.update({
                where: {
                    id: session.user.id
                },
                data: {
                    name: name,
                    username: username
                },
            })
        }

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