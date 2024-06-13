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

const DashboardMenu = (props: any) => {
  const menuList: MenuItem[] = [
    { element: <Home className="mr-2" />, text: 'Home' },
    { element: <User className="mr-2" />, text: 'Profile' },
    { element: <Settings className="mr-2" />, text: 'Settings' },
  ]

  const handleActive = (text: String) => {
    console.log("active", text)
  }

  const handleSignOut = async () => {
    try {
      await signOut('google')
    } catch (error) {
      console.log(error)
    }
  }

  const { data: session } = useSession()

  return (
    <Card className="col-span-2">
      <CardHeader>
        <Link href={session?.user ? ('/profile/' + session?.user.id) : '/'}>
          <div className={"flex items-center cursor-pointer"}>
            <Avatar className={"relative flex shrink-0 overflow-hidden rounded-full mr-4 h-10 w-10"}>
              <AvatarImage className="aspect-square h-full w-full" src={session?.user ? session?.user.image : "https://github.com/shadcn.png"} />
              <AvatarFallback className="AvatarFallback">CN</AvatarFallback>
            </Avatar>
            <CardTitle>{session?.user ? session?.user.name : "default"}</CardTitle>
          </div>
        </Link>
      </CardHeader>
      <CardContent>
        {menuList.map(item => <Link key={item.text} href="/"><div onClick={() => handleActive(item.text)} className="flex rounded-md p-2 py-3 hover:bg-gray-50 dark:hover:bg-[#1d283a]">{item.element} {item.text}</div></Link>)}
      </CardContent>
      <CardFooter>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </CardFooter>
    </Card>
  )
}

export default DashboardMenu