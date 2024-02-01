import React from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setMensaje, mensaje, setIsValid}) => {

    const HandlePresupuesto = (e) => {
        e.preventDefault()

        if (!presupuesto || presupuesto < 0) {
            setMensaje('pone bien las cosas boludito')
            return
        } else {
            setMensaje('')
            setIsValid(true)
        }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={HandlePresupuesto} className='formulario' action="">
            <div className='campo'>
                <label htmlFor=""></label>
                <input placeholder='añade tu presupuesto' className='nuevo-presupuesto' type="number" onChange={(e) => setPresupuesto(Number(e.target.value))} />
                <input type="submit" value="añadir" />
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </div>
        </form>
    </div>
  )
}

export default NuevoPresupuesto