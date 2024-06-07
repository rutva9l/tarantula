import { db } from "@/lib/db"

export async function GET() {
    try {
        const posts = await db.grain.findMany()

        return new Response(JSON.stringify(posts))
    } catch (error) {
        return new Response(error? error?.message : "Could not retrieve.", {status: 500})
    }
}