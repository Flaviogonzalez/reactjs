import React from 'react'
import { getGuitarras } from '~/models/guitarras.server'
import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '../components/listado-guitarras'
export function meta() {
  return [
      {
          title: 'GuitarLA - Tienda',
          description: 'venta de guitarras y cursos para principiantes, intermedios y avanzados!'
      }
  ]
}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {
  const guitarras = useLoaderData()
  return (
    <>
        <h2 className='heading'>Nuestra coleccion</h2>
  
        <ListadoGuitarras guitarras={guitarras} />
    </>

  )
}

export default Tienda
