import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse,  } from '@remix-run/react'
import Styles from './styles/index.css'
import Normalize from '~/styles/normalize.css'
import Header from '~/components/header'
import Footer from '~/components/footer'
import { useEffect, useState } from 'react'

export function meta() {
    return(
        [        
            {charset: 'UTF-8',},
            {title: 'GuitarLA - Remix',},
            {viewport: 'width=device-width, initial-scale=1'}
        ]
    )
}
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: Normalize
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: Styles
        },
    ]
}

export default function app() {
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
    const [carrito, setCarrito] = useState(carritoLS)
    
    useEffect(() => {
        if (carrito?.length === 0) return;
        localStorage.setItem('carrito', JSON.stringify(carrito))

    }, [carrito])

    const agregarCarrito = guitarra => {
       if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            // registro ya existente
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id = guitarra.id) {
                    // reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
        } else {
            // registro nuevo
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }

            return guitarraState
        })

        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)

        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Outlet context={{
                agregarCarrito,
                actualizarCantidad,
                eliminarGuitarra,
                carrito
            }}/>
        </Document>
    )
}

function Document({children}) {
    return (
        <html>
            <head lang="es">
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

export function ErrorBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className='error'>
                    {error.status} {error.statusText}
                </p>
            </Document>
        )
    }
}