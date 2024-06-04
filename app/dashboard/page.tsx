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
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="p-8 grid grid-cols-10 gap-5">
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
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
            <Card className="col-span-5">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
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
            <Card className="col-span-2">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
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