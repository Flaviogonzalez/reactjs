import React from 'react'
import {Link, useLocation} from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='contenedor contenido'>
            <Navegacion/>
            <p className='copyright'>GuitarLA™ & © Papirola inc. Todos los derechos reservados. / {new Date().getFullYear()} </p>
        </div>
    </footer>
  )
}

export default Footer
