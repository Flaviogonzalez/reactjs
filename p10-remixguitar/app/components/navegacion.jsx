import {Link, useLocation} from '@remix-run/react'
import Carrito from '~/../../public/img/carrito.png'

const Navegacion = () => {
    const location = useLocation()
  return (
    <nav className='navegacion'>
      <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
      <Link to='/nosotros' className={location.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Link>
      <Link to='/guitarras' className={location.pathname === '/guitarras' ? 'active' : ''}>Tienda</Link>
      <Link to='/posts' className={location.pathname === '/posts' ? 'active' : ''}>Blog</Link>
      <Link to='/carrito'>
        <img src={Carrito} alt="" />
      </Link>
    </nav>
  )
}

export default Navegacion
