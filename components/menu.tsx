"use client"

import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "./ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { MenuItem } from "@/types/menu";
import { Button } from "./ui/button";
import { Home, User, Settings } from "lucide-react"
import Link from "next/link";

const DashboardMenu = () => {
    const menuList: MenuItem[] = [
        { element: <Home className="mr-2" />, text: 'Home' },
        { element: <User className="mr-2" />, text: 'Profile' },
        { element: <Settings className="mr-2" />, text: 'Settings' },
      ]
    
      const handleActive = (text: String) => {
        console.log("active", text)
      }

    return (
        <Card className="col-span-2">
        <CardHeader>
          <div className="flex items-center">
            <Avatar className="mr-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle>session.user.name</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {menuList.map(item => <Link href="/"><div key={item.text} onClick={() => handleActive(item.text)} className="flex p-2 hover:bg-[#1d283a] dark:hover:bg-slate-200 rounded-md py-3 px-2">{item.element} {item.text}</div></Link>)}
        </CardContent>
        <CardFooter>
          <Button>Sign Out</Button>
        </CardFooter>
      </Card>
    )
}

export default DashboardMenu