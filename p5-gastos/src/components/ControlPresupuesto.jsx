import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
    const retornarDinero = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>grafica aqui</p>
        </div>

        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {retornarDinero(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span> {retornarDinero(0)}
            </p>
            <p>
                <span>Gastado: </span> {retornarDinero(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto