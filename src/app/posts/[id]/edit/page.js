import React from 'react'
import { getPostById,getAllPosts } from '@/db'
import { db } from "@/db";
import PostEditForm from '@/app/components/BlogEditForm'
const EditPage = async(props) => {
  const id=props.params.id

  const post =await db.post.findFirst({
    where:{
        id
    }
})
  return (
    <div>
      <PostEditForm Post={post} />
    </div>
  )
}

export default EditPage