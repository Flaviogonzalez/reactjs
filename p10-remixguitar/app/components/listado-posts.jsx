import React from 'react'
import Post from './post'

export default function ListadoPosts({posts}) {
  return (
    <>
      <div className='blog'>
        {posts.map(post => (
          <Post post={post.attributes} key={post.id}/>
        ))}
      </div>
    </>
  )
}
