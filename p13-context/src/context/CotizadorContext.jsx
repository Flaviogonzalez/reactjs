import React,{ createContext, useState } from 'react'
import { obtenerDiferencia, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)
    const handleChangeDatos = e => {
        setDatos({ // si tengo 3 states y reescribo una sola propiedad, se eliminan los demas states.
            ...datos, // sin embargo con el spread operator no elimina los demas states y reescribe el state que fue modificado.
            [e.target.name]: e.target.value,
        })

        
    }

    const cotizarSeguro = () => {
        // creando un algoritmo para cotizar el seguro
        // el algoritmo requiere de una base
        let resultado = 2000
        // obtener diferencia de years
        const diferencia = obtenerDiferencia(datos.year)
        // hay que restar 3% por cada year
        resultado = resultado - ((diferencia * 3) * resultado) / 100
        // americano 15%
        // europeo 30%
        // asiatico 5%
        resultado = resultado * calcularMarca(datos.marca)
        // planes
        // basico
        // completo
        resultado = resultado * calcularPlan(datos.plan)

        resultado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
    }

    return (
        <CotizadorContext.Provider value={{
            datos,
            handleChangeDatos,
            setError,
            error,
            cotizarSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext