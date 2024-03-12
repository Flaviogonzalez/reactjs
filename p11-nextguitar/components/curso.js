import React from 'react'
import styles from '../styles/curso.module.css'

export default function Curso({curso}) {
    const {contenido, imagen, Titulo} = curso.attributes
  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>
            {`
                .curso {
                    background-image: linear-gradient(to right, rgb(0 0 0/ .65), rgb(0 0 0/ .7)), url(${imagen?.data?.attributes?.formats.url});
                }
            `}
        </style>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{Titulo}</h2>
                <p>{contenido[0].children[0].text}</p>
            </div>
        </div>
    </section>
  )
}
