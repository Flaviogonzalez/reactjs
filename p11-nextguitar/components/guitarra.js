import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/guitarras.module.css'


export default function Guitarra({guitarra}) {
  const {media, nombre, precio, url, descripcion} = guitarra

  return (
    <div className={styles.guitarra}>
      <Image src={media.data.attributes.formats.medium.url} alt={`imagen de la guitarra ${nombre}`} width={600} height={400}/>

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
        <p className={styles.precio}>{precio}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  )
}
