'use server'
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import { db } from "@/db";
import { unstable_cache } from "next/cache";
export async function editPost(id,description){
    await db.post.update({
        where:{
            id
        },
        data:{
           description
        }
    })
    revalidateTag('single-post')

    redirect(`/`)
}