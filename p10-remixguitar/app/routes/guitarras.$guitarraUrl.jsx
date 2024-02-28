import { useState } from 'react'

import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarra } from '../models/guitarras.server'

export function meta({data}) {
  return [{
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras - venta de guitarras, La guitarra ${data.data[0].attributes.nombre}`
  }]
}


export async function loader({ params }) {
  const {guitarraUrl} = params
  
  const guitarra = await getGuitarra({ url: guitarraUrl})

  if (guitarra.data.length === 0) {
    throw new Response(
      '', {
        status: 404,
        statusText: 'Guitarra no encontrada'
      }
    )
  }

  return guitarra
}

const Guitarra = () => {
    const { agregarCarrito } = useOutletContext()
    const guitarra = useLoaderData()
    const {nombre, descripcion, media, precio} = guitarra.data[0].attributes
    const [cantidad, setCantidad] = useState(0)

    const handleSubmit = e => {
      e.preventDefault()

      if (cantidad < 1) {
        alert('debes seleccionar una cantidad')
        return
      }

      const guitarraSeleccionada = {
        id: guitarra.data[0].id,
        imagen: media.data.attributes.url,
        nombre,
        precio,
        cantidad
      }

      agregarCarrito(guitarraSeleccionada)
    }

    return (
      <div className='guitarra'>
        <img src={media.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} className='imagen' />
        <div className='contenido '>
          <h3>{nombre}</h3>
          <p className='texto'>{descripcion[0].children[0].text}</p>
          <p className='precio'>${precio}</p>

          <form onSubmit={handleSubmit} className='formulario'>
            <label htmlFor="cantidad">cantidad</label>
            <select onChange={e => setCantidad(parseInt(e.target.value))} name="" id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value='agregar al carrito'/>
          </form>
        </div>
      </div>
  )
}

export default Guitarra
