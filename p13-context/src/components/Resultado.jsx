import React, { useCallback, useRef } from 'react'
import { useCotizador } from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants/index'


export default function Resultado() {
    const { resultado, datos } = useCotizador()
    const {marca, year, plan} = datos

    if (resultado === 0) return null

    const yearRef = useRef(year)
    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado])
    const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), [resultado])

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>
            Resumen
        </h2>

        <p className='my-2'><span className='font-bold'>Marca: </span>{nombreMarca.nombre}</p>
        <p className='my-2'><span className='font-bold'>Plan: </span>{nombrePlan.nombre}</p>
        <p className='my-2'><span className='font-bold'>Year: </span>{yearRef.current}</p>
        <p className='my-2 text-2xl'><span className='font-bold'>Precio: </span>{resultado}</p>
    </div>
  )
}
