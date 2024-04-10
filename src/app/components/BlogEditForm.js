'use client';
import { useState } from "react";
import * as actions from "@/actions";

export default function PostEditForm ({Post}){
    const [description,setDescription]=useState(Post.description)

    const HandleEditChange=(value)=>{
       
      setDescription(value)

    }
    
    const editPostAction=actions.editPost.bind(null,Post.id,description)
    return (
        <div>
            <h1 className="font-bold text-lg  mt-16">{Post.title}</h1>
           <textarea  defaultValue={Post.description} onChange={(e)=>HandleEditChange(e.target.value)} className="w-[500px] mt-12 h-24 border border-color-red-500 p-4 "/>
           <form action={editPostAction}>
            <button type="submit" className="p-2 border rounded">Save</button>
           </form>
        </div>
    )

}