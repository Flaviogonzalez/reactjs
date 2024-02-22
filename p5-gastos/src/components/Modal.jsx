import React, { useEffect, useState } from 'react'
import cerrar from './../img/cerrar.svg'
import Mensaje from './Mensaje'

export const Modal = ({setModal, animation, setAnimation, guardarGasto, gastoEditar, setGastoEditar}) => {
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')
    
    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        } 
    }, [])

    const cerrarModal = () => {
        setAnimation(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 350);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, categoria, cantidad].includes('')) {
            setMensaje('Todos los campos son obligatorios.')
            return
        } else {
            guardarGasto({nombre, categoria, cantidad, id, fecha})
        }
    }
  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={cerrar} alt="" onClick={cerrarModal} />
        </div>

        <form onSubmit={handleSubmit} action="" className={`formulario ${animation ? 'animar' : 'cerrar'} `}>
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input id='nombre' type="text" placeholder='Añade el nombre del gasto' value={nombre} onChange={e => setNombre(e.target.value)}/>
            </div>
            
            <div className='campo'>
                <label htmlFor="cantidad">cantidad</label>
                <input id='cantidad' type="number" placeholder='Añade la cantidad' value={cantidad} onChange={e => (setCantidad(Number(e.target.value)))}/>
            </div>
            
            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>

                <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">ahorro</option>
                    <option value="comida">comida</option>
                    <option value="casa">casa</option>
                    <option value="ocio">ocio</option>
                    <option value="gastos">gastos varios</option>
                    <option value="salud">salud</option>
                    <option value="suscripciones">subscripciones</option>
                </select>
            </div>

            <input type="submit" value={gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'} />

        </form>
    </div>
  )
}
