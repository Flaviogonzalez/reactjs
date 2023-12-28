import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import Grafico from './Grafico'


const ResumenTotal = ({porcentaje, retorno, invertido, total}) => {
  return (
  <div className='flex justify-center flex-row bg-gray-300 p-5 m-5 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1'>
    <div className='flex flex-row items-center gap-10'>
      <div className='py-5 h-full'>
        <h2 className='font-semibold'>Invertido</h2>
        <h1 className='font-bold text-3xl'>{`$${invertido}`}</h1>
      </div>

      <div className='m-4 flex flex-col items-center'>
        <h2 className='font-semibold'>Retorno</h2>
        <h1 className='font-bold text-3xl mb-5'>{`$${retorno}`}</h1>

        <CircularProgressbar styles={buildStyles({
          pathColor: '#4f46e5'
        })}
        value={porcentaje}
        text={`${porcentaje}%`}
        />

      </div>

      <div className='py-5 h-full'>
        <h2 className='font-semibold'>Total</h2>
        <h1 className='font-bold text-3xl'>{`$${total}`}</h1>
      </div>

    </div>
  </div>
  )
}

export default ResumenTotal
