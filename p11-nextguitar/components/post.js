import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/blog.module.css'
import { formatearFecha } from '../helpers/utils'
export default function Post({post}) {
    const {contenido , imagen, titulo, url, publishedAt} = post
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} alt={`imagen de ${titulo}`} width={600} height={400}/>

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha} >{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen} >{contenido[0].children[0].text}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>Leer post</Link>
        </div>
    </article>
  )
}
