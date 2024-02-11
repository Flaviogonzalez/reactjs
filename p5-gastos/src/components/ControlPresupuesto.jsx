import React, {useEffect, useState} from 'react'

const ControlPresupuesto = ({presupuesto, gastos}) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, i) => i.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado
        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])

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
                <span>Disponible: </span> {retornarDinero(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {retornarDinero(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto