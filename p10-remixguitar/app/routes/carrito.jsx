import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils/client-only'
import Styles from '~/styles/carrito.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: Styles
        }
    ]
}

export function meta() {
    return [
        {
            title: 'GuitarLA - Carrito de Compras'
        }
    ]
}

export default function Carrito() {
    
    const [total, setTotal] = useState(0)
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])
  return (
    <ClientOnly fallback={''}>
        {() => (
            <main className="contenedor">
            <h1 className="heading">Carrito de Compras</h1>

            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>

                    {carrito?.length === 0 ? 'Carrito Vacio' : (
                        carrito?.map(producto => (
                            <>
                                <div className='producto' key={producto.id}>
                                    <div>
                                        <img src={producto.imagen} alt="sisi ya te escuchamos" />
                                    </div>

                                    <div>
                                        <p className="nombre">{producto.nombre}</p>
                                        <p className='cantidad'>Cantidad:</p>

                                        <select className='select' value={producto.cantidad} onChange={e => actualizarCantidad({
                                            cantidad: +e.target.value,
                                            id: producto.id
                                        })}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <p className='precio'>$ <span>{producto.precio}</span></p>
                                        <p className='subtotal'>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                                    </div>

                                    <button className='btn_eliminar' type='button' onClick={() => eliminarGuitarra(producto.id)}>X</button>
                                </div>
                            </>
                        ))
                        )}
                </div>

                <aside className="resumen">
                    <h3>resumen del pedido</h3>
                    <p>total a pagar: ${total}</p>
                </aside>
            </div>
            

        </main>
        )}
    </ClientOnly>
  )
}
