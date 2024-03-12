import React, { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/guitarras.module.css'

export default function Producto({guitarra, agregarCarrito}) {
  const [cantidad, setCantidad] = useState(0)
  const {nombre, descripcion, media, precio} = guitarra[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      alert('Cantidad no valida')
      return
    }

    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: media.data.attributes.url,
      nombre,
      cantidad,
      precio
    }

    agregarCarrito(guitarraSeleccionada)
  }
  return (
    <Layout title={`${nombre}`}>
      <div className={styles.guitarra}>
        <Image src={media.data.attributes.formats.medium.url} alt={`imagen de la guitarra ${nombre}`} width={600} height={400}/>

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
          <p className={styles.precio}>{precio}</p>

          <form onSubmit={handleSubmit}  className={styles.formulario}>
            <label htmlFor='cantidad'></label>

            <select onChange={e => setCantidad(+e.target.value)} id="cantidad">
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value={'Agregar al carrito'} />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await respuesta.json()
  const paths = data.map(i => ({
    params: {
      url: i.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({params: { url }}) {
    
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=media`)
  const { data: guitarra } = await respuesta.json()
  
  return {
      props: {
          guitarra
      }
  }
}

// export async function getServerSideProps({query: { url }}) {
    
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=media`)
//     const { data: guitarra } = await respuesta.json()
    
//     return {
//         props: {
//             guitarra
//         }
//     }
// }