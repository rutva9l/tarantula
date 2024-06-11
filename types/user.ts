import { Posts } from "./post";

export interface UserType {
    createdAt: string,
    email: string, 
    emailVerified: string | null, 
    id: string,
    image: string,
    name: string,
    username: string,
    grains: Posts[]
}