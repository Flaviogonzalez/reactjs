import { Link } from '@remix-run/react'
import React from 'react'
import { formatearFecha } from '../utils/helpers'


export default function Post({post}) {

    const {titulo, contenido, imagen, url, createdAt} = post
  return (
    <div>
      <article className='post'>
        <img className='imagen' src={imagen.data.attributes.formats.small.url} alt="" />
        <div className='contenido'>
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(createdAt)}</p>
            <p className='resumen'>{contenido[0].children[0].text}</p>
            <Link className='enlace' to={`/posts/${url}`}>Leer Post</Link>
        </div>
      </article>
    </div>
  )
}
