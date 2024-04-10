import { db, getAllPosts } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
export default async function PostsCreatePage(){
    async function createPost(formData){
        'use server';
        const title=formData.get('title') ;
        const description=formData.get('description') ;

        const Post = await db.post.create({
            data:{
                title,
                description
            }
        })
        // revalidatePath('/')
        revalidateTag('posts')
        redirect('/')

    }
    // const posts=await getAllPosts()
    // if(!posts){
    //     return <p>Please add a new post</p>
    //   }
    //   const renderedposts=posts.map((post)=>{
    //     return (
    //       <Link key={post.id} href={`/posts/${post?.id}`} className=" w-[500px] mt-12 mx-auto flex justify-between items-center rounded p-4 border-4 ">
    //         <h2> {post.title}</h2>
    //         <p>View </p>
            
    
    //       </Link>
    //     )
    //   })
    return (
        <div>
       <form className="w-[500px] mx-auto" action={createPost}>
        <h3 className="font-bold m-3">Create a Post</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">Title</label>
                <input name="title" className="border rounded p-2 w-full" id="title"/>

            </div>
            <div className="flex gap-4">
                <label className="w-12" htmlFor="description">description</label>
                <textarea name="description" className="border rounded p-2 w-full" id="description"/>

            </div>
            <button className="p-2 bg-blue-400">Create</button>

        </div>
       </form>
       {/* {renderedposts} */}
       </div>
    )
}