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
import { Home, User, Settings, MessageSquare } from "lucide-react";
import Post from "@/components/post";
import DashboardMenu from "@/components/menu";

const Feed = ({type}:String) => {
    return (
        <Card className="col-span-5">
            <CardHeader>
                <CardTitle>{type == "feed" ? "Your Feed" : "Post"}</CardTitle>
            </CardHeader>
            <CardContent>
                {type == "feed" ? <>
                <Post type="collapsed" />
                <Post type="collapsed" /></> : <Post type="expanded" />
                }
            </CardContent>
        </Card>
    )
}

export default Feed