"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function IndexPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <section className="container w-full h-full flex justify-center items-center pb-8 pt-6 md:py-10">
      <Card className="w-full md:w-[30%]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Google Account</Button>
          <Separator className="my-2" />
          <form onSubmit={handleSubmit}>
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
          {/* <Separator className="my-2" /> */}
        </CardContent>
        <CardFooter>
          Don't have an account? <Link href=""> Register</Link>
        </CardFooter>
      </Card>
    </section>
  )
}
