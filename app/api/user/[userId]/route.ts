import { db } from "@/lib/db";

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
                grains: true
            }
        })
        return new Response(JSON.stringify(user))
    } catch (error) {
        return new Response("Could not retrieve.", { status: 500 })

    }
}