import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Link from "next/link"
import { Input } from "./ui/input"

const Search = () =>{
    return (
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
        </CardContent>
        <CardFooter>
          Don't have an account? <Link href=""> Register</Link>
        </CardFooter>
      </Card>
    )
}

export default Search