import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/carrito.module.css'
import Image from 'next/image'

export default function Carrito({carrito, actualizarCantidad, eliminarProducto}) {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio ), 0 )

        setTotal(calculoTotal)
    },[carrito])

  return (
    <Layout title='Carrito'>
        <main className='contenedor'>
            <h1 className='heading'>Carrito</h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>articulos</h2>

                    {carrito.length === 0 ? 'carrito vacio' : carrito.map(producto => (
                        <div key={producto.id} className={styles.producto}>
                            <div>
                                <Image width={250} height={400} src={producto.imagen} alt={producto.nombre}/>
                            </div>

                            <div>
                                <p className={styles.nombre}>{producto.nombre}</p>

                                <div className={styles.cantidad}>
                                    <p>Cantidad: </p>

                                    <select onChange={e => actualizarCantidad({
                                        id: producto.id,
                                        cantidad: e.target.value
                                    })} value={producto.cantidad} className={styles.select}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>

                                <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                <p className={styles.subtotal}>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                            </div>

                            <button className={styles.eliminar} type='button' onClick={() => eliminarProducto(producto.id)}>X</button>
                        </div>
                    ))}
                </div>

                <aside className={styles.resumen}>
                    <h3>resumen del pedido</h3>

                    <p>total a pagar: {total}</p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}
