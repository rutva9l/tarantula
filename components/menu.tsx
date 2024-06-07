"use client"

import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "./ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { MenuItem } from "@/types/menu";
import { Button } from "./ui/button";
import { Home, User, Settings } from "lucide-react"
import Link from "next/link";
import AvatarSet from "./avatar"
import { signOut } from "next-auth/react";

const DashboardMenu = (props:any) => {
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
        } catch(error){
          console.log(error)
        }
      }

    return (
        <Card className="col-span-2">
        <CardHeader>
          <AvatarSet type="profile" />
        </CardHeader>
        <CardContent>
          {menuList.map(item => <Link href="/"><div key={item.text} onClick={() => handleActive(item.text)} className="flex p-2 hover:bg-gray-50 dark:hover:bg-[#1d283a] rounded-md py-3 px-2">{item.element} {item.text}</div></Link>)}
        </CardContent>
        <CardFooter>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </CardFooter>
      </Card>
    )
}

export default DashboardMenu