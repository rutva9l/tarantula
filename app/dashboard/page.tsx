'use client'

import { SiteHeader } from "@/components/site-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Home, User, Settings } from "lucide-react";
import { MenuItem } from "@/types/menu";


export default function Dashboard() {
  const menuList: MenuItem[] = [
    { element: <Home className="mr-2" />, text: 'Home' },
    { element: <User className="mr-2" />, text: 'Profile' },
    { element: <Settings className="mr-2" />, text: 'Settings' },
  ]

  const handleActive = (text: String) => {
    console.log("active", text)
  }

  return (
    <div className="p-8 grid grid-cols-9 grid-rows-auto row-auto gap-5">
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
          {menuList.map(item => <div key={item.text} onClick={() => handleActive(item.text)} className="flex p-2 hover:bg-[#1d283a] rounded-md py-3 px-2">{item.element} {item.text}</div>)}
        </CardContent>
        <CardFooter>
          <Button>Sign Out</Button>
        </CardFooter>
      </Card>
      <Card className="col-span-5">
        <CardHeader>
          <CardTitle>Your Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <Card>
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
              <div>This is card content.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </div>
            </CardContent>
            <Separator />
            <CardFooter>
              This is card footer
            </CardFooter>
          </Card>
        </CardContent>
        <CardFooter>
          This is card footer
        </CardFooter>
      </Card>
      <Card className="col-span-2">
        <CardHeader>
          <Input
            placeholder="Search..."
            className="max-w-sm m-0"
          />
        </CardHeader>
        <CardContent>
          <Button className="w-full">Google Account</Button>
          <Separator className="my-2" />
          {/* <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="pb-2 w-full">
                <Label htmlFor="name">Username or Email</Label>
                <Input id="name" />
              </div>
              <div className="pb-4 w-full">
                <Label htmlFor="password">Password</Label>
                <Input id="password" />
              </div>
              <Button type="submit" className="self-center pb-2">
                Login
              </Button>
            </div>
          </form>
          <Separator className="my-2" /> */}
        </CardContent>
        <CardFooter>
          Don't have an account? <Link href=""> Register</Link>
        </CardFooter>
      </Card>
    </div>
  )
}