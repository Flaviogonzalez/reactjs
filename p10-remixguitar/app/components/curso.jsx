import React from 'react'

export default function Curso({curso}) {

    const {contenido, imagen, Titulo} = curso
  return (
    <section className='curso'>
        <style jsx='true'>
            {`
                .curso {
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen.data.attributes.formats.large.url})
                }
            `}
        </style>

        <div className='contenedor curso-grid'>
            <div className="contenido">
                <h2 className="heading">{Titulo}</h2>
                <p className="texto">{contenido[0].children[0].text}</p>
            </div>
        </div>
    </section>
  )
}
