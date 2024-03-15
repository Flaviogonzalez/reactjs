import React, {Fragment} from 'react'
import { PLANES, YEARS, marcas } from '../constants' 
import { useCotizador } from '../hooks/useCotizador'
import Error from './Error'
export default function Formulario() {

    
    const { handleChangeDatos, datos, setError, error, cotizarSeguro } = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(datos)
        if (Object.values(datos).includes('')) {
            setError('pone algo aunque sea, no seas malo')
            return
        }
        setError('')
        cotizarSeguro()
        
    }


  return (
    <>
        {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <div className='my-5'>
                <label htmlFor="marca" className='block mb-3 font-bold text-gray-400 uppercase'>Marca</label>

                <select value={datos.marca} onChange={e => handleChangeDatos(e)} name="marca" id="marca" className='w-full p-3 bg-white border border-gray-200'>
                    <option value="">--Seleccione--</option>
                    {marcas.map(i => (
                        <option value={i.id} key={i.id}>
                            {i.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="year" className='block mb-3 font-bold text-gray-400 uppercase'>Año</label>

                <select value={datos.year} onChange={e => handleChangeDatos(e)} name="year" id="year" className='w-full p-3 bg-white border border-gray-200'>
                    <option value="">--Seleccione--</option>
                    {YEARS.map(i => (
                        <option value={i} key={i}>
                            {i}
                        </option>
                    ))}
                </select>
            </div>
            <div className='my-5'>
                <label htmlFor="marca" className='block mb-3 font-bold text-gray-400 uppercase'>Elige un plan</label>

                <div className='flex gap-3 items-center'>
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label htmlFor="plan">{plan.nombre}</label>

                            <input onChange={handleChangeDatos} id='plan' type="radio" name='plan' value={plan.id} />
                        </Fragment>
                    ))}

                </div>
            </div>

            <input type="submit" value='Cotizar' className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' />
        </form>
    </>
  )
}
