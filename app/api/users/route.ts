import client from "@/prisma/client"

export async function GET(request: Request) {
  const users = await client.user.findMany()
  console.log(users)
  return new Response(JSON.stringify(users))
}

export async function POST(request: Request){
  const data = await request.json()

  const newUser = await client.user.create({
    data
  })

  console.log(newUser)

  return new Response(JSON.stringify(newUser))
}