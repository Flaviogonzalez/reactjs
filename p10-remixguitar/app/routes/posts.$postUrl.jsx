import React from 'react'
import { getPost } from '../models/posts.server'
import { useLoaderData } from '@remix-run/react'
import { formatearFecha } from '../utils/helpers'

export function meta({data}) {
    return [
      {
        title: `GuitarLA - ${data?.data[0]?.attributes.titulo}`
      }
    ]
  }

export async function loader({params}) {
    const { postUrl } = params

    const post = await getPost({url: postUrl})
    if (post.data.length === 0) {
        throw new Response(
          '', {
            status: 404,
            statusText: 'Blog no encontrado'
          }
        )
      }
    return post
}

export default function Post() {
    const post = useLoaderData()

    const { titulo, imagen, contenido, createdAt } = post.data[0].attributes

  return (
    <article className='post'>
        <img className='imagen mt-3' src={imagen.data.attributes.url} alt="" />
        <div className='contenido'>
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(createdAt)}</p>
            <p className='texto'>{contenido[0].children[0].text}</p>
        </div>
    </article>
  )
}
