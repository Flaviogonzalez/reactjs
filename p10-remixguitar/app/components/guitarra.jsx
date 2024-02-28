
import {Link} from '@remix-run/react'

const Guitarra = ({guitarra}) => {
    const { descripcion, media, nombre, precio, url } = guitarra
  return (
    <div className="guitarra">
        <img src={media.data.attributes.formats.medium.url} alt={nombre} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion[0].children[0].text}</p>
        <p className="precio">${precio}</p>

        <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}

export default Guitarra
