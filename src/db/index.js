import { PrismaClient } from "@prisma/client";
import {cache} from 'react';
export const db=new PrismaClient();
import { unstable_cache } from "next/cache";

export const getPostById=unstable_cache(async(id)=>{
    console.log('called')
    const Post= await db.post.findFirst({
        where:{
            id
        }
    })
    return Post
} ,['post'],{
    tags:['single-post'],
    revalidate:3600,
})

// export const getPostById=cache(async(id)=>{
//     console.log('called')
//     const Post= await db.post.findFirst({
//         where:{
//             id
//         }
//     })
//     return Post
// })
export const getAllPosts=async()=>{
    const posts=await db.post.findMany()
    return posts
}