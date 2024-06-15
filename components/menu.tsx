"use client"

import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "./ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { MenuItem } from "@/types/menu";
import { Button } from "./ui/button";
import { Home, User, Settings } from "lucide-react"
import Link from "next/link";
import AvatarSet from "./avatar"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Session } from 'next-auth';
import { useRouter } from "next/navigation";

const DashboardMenu = (props: any) => {
  const { data: session } = useSession()
  const router = useRouter()

  const menuList: MenuItem[] = [
    { element: <Home className="mr-2" />, text: 'Home', link: '/', id: 1 },
    { element: <User className="mr-2" />, text: 'Profile', link: (session?.user ? ('/profile/'+session?.user.id) : '/'), id: 2},
    { element: <Settings className="mr-2" />, text: 'Settings', link: '/', id: 3 },
  ]

  const handleActive = (link: string) => {
    router.push(link)

  }

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <Link href={session?.user ? ('/profile/' + session?.user.id) : '/'}>
          <div className={"flex items-center cursor-pointer"}>
            <Avatar className={"relative flex shrink-0 overflow-hidden rounded-full mr-4 h-10 w-10"}>
              <AvatarImage className="aspect-square h-full w-full" src={ session?.user.image ? session?.user.image : "https://github.com/shadcn.png"} />
              <AvatarFallback className="AvatarFallback">CN</AvatarFallback>
            </Avatar>
            <CardTitle>{session?.user ? session?.user.name : "default"}</CardTitle>
          </div>
        </Link>
      </CardHeader>
      <CardContent>
        {menuList.map(item => <div onClick={() => handleActive(item.link)} className="flex rounded-md p-2 py-3 hover:bg-gray-50 dark:hover:bg-[#1d283a] cursor-pointer">{item.element} {item.text}</div>)}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </CardFooter>
    </Card>
  )
}

export default DashboardMenu