import { db, getPostById ,getAllPosts} from "@/db"
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams(){
    console.log('generateStaticParams called')
    const posts=await db.post.findMany()

    return posts.map((post)=>{
       return {
        id:post.id
       }
    })
}
const getPosts=async()=>{
    const response=await fetch('http://localhost:3000/api/posts',{
      next:{
        tags:['posts']
      }
    });
    const data=await response.json();
    return data
  }
  
export default async function ShowPost(props){

    await new Promise((res,rej)=>setTimeout(res,2000))
    const posts=await getPosts()
   
   const Post =await getPostById(props.params.id)
   console.log(Post);
//    const Post2 =await getPostById(props.params.id)
    if(!Post){
        return notFound()

    }
    // const deleteSnippedAction=actions.deletePost.bind(null,Post.id)
    return (
        <div className="mx-auto flex flex-col">
           <div className="flex justify-between items-center m-4">
            <h1 className="font-bold">{Post.title}</h1>
           </div>
           
          <div className="w-[500px]  bordered p-4 bg-gray-500">
            <p>{Post.description}</p>
          </div>
          <div className="mt-12 ">
                <Link  href={`${Post.id}/edit`} className="p-2 rounded bg-blue-700">Edit</Link>
                
               
            </div> 
         
        </div>
    )
}