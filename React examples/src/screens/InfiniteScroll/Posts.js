import React from 'react'

const Posts = ({post}) => {
  return (
    <div className='posts'>
        <label><span className='post-id'>{post.id} - </span>{post.title}</label>
        <p>{post.body}</p>
    </div>
  )
}

export default Posts