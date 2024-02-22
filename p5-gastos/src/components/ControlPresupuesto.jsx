import React, {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({presupuesto, gastos, setPresupuesto, setGastos, setIsValid}) => {
    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, i) => i.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        setPorcentaje(nuevoPorcentaje)
        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])

    const retornarDinero = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('deseas reiniciar la app?')

        if (resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValid(false)
        } else {

        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar styles={buildStyles({
                pathColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
                trailColor: '#f5f5f5',
                textColor: porcentaje > 100 ? '#DC2626' : '#3b82f6'
            })} value={porcentaje} text={`${porcentaje}% Gastado`}></CircularProgressbar>
        </div>

        <div className='contenido-presupuesto'>
            <button className='reset-app' type='button' onClick={handleResetApp}>
                Resetear App
            </button>
            <p>
                <span>Presupuesto: </span> {retornarDinero(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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