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
        try {
          const res = await signIn('google')
          console.log(res)
        } catch (error) {
          console.log(error)
        }
      }
    return (
        <Card className="mt-8 w-full md:w-[30%]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" onClick={handleSubmit}>Google Account</Button>
                <Separator className="mt-2" />
            </CardContent>
            <CardFooter className="pb-2">
                By logging in, you agree to give us all your info. Data privacy is not a thing we follow in this company.
            </CardFooter>
        </Card>
    )
}