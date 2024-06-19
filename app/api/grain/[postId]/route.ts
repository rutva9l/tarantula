import { db } from "@/lib/db";

export async function GET(
    request: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const { postId } = params;
        const post = await db.grain.findFirst({
            where: {
                OR: [
                    {
                        id: {
                            equals: postId
                        }
                    },
                    {
                        authorId: {
                            equals: postId
                        }
                    }
                ]
            },
            include: {
                comments: {
                    include: {
                        author: true
                    }
                },
                author: true
            }
        })
        return new Response(JSON.stringify(post))
    } catch (error) {
        return new Response("Could not retrieve.", { status: 500 })

    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { postId: string } }
) {
    try {
        const { postId } = params;
        const deletedPost = await db.grain.delete({
            where: {
                id: postId
            }
        })
        
        return new Response('ok')
    } catch (error) {
        return new Response("Could not retrieve.", { status: 500 })

    }
}