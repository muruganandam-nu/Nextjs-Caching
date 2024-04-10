
import { getAllPosts } from "@/db";
import Link from "next/link";

export default async function FullRouteCache() {

  const posts=await getAllPosts()


  
  if(!posts){
    return <p>Please add a new post</p>
  }
  const renderedposts=posts.map((post)=>{
    return (
      <Link key={post.id} href={`/posts/${post?.id}`} className=" w-[500px] mt-12 mx-auto flex justify-between items-center rounded p-4 border-4 ">
        <h2> {post.title}</h2>
        <p>View </p>
        

      </Link>
    )
  })
  return (
    <div>
      <div className=" w-[500px] mt-12 mx-auto flex justify-between items-center  p-4  ">
        <h2 className="p-2 font-bold">posts</h2>
     
       <Link href={`/posts/new`} className="p-2 border-2">Add</Link>
      </div> 
     {renderedposts} 
    
    </div>
  );
}
