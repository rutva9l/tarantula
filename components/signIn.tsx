'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { signIn } from "next-auth/react"
import Link from "next/link"


export function SignIn() {
    const handleSubmit = async () => {
        console.log("submitted")
        try {
          await signIn('google')
        } catch (error) {
          console.log(error)
        }
      }
    return (
        <Card className="w-full md:w-[30%]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" onClick={handleSubmit}>Google Account</Button>
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
    )
}