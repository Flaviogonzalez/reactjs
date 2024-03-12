import React from 'react'
import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({guitarra}) {
  return (
    <Layout title='Tienda'>
      <main className='contenedor'>
        <h2 className='heading'>
          Nuestras coleccion
        </h2>

        <div className={styles.grid}>
        {guitarra?.map(guitarra => (<Guitarra key={guitarra.id} guitarra={guitarra.attributes}/>))}
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=media`)
  const {data: guitarra} = await respuesta.json()
  return {
    props: {
      guitarra
    }
  }
}