import {getPosts} from '~/models/posts.server.js'
import {useLoaderData} from '@remix-run/react'
import ListadoPosts from '../components/listado-posts'

export function meta() {
  return [
    {
      title: 'guitarLA - blog'
    }
  ]
}

export async function loader() {
  const post = await getPosts()

  return post.data
}
const Blog = () => {
  const posts = useLoaderData()

  return (
    <>
        <h2 className='heading'>Blog</h2>
        <ListadoPosts posts={posts}/>
    </>
  )
}

export default Blog