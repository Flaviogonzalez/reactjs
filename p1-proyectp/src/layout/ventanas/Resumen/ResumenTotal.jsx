import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

const ResumenTotal = ({valor}) => {
  return (
        <div className='bg-gray-300 flex flex-row items-center p-5 m-5 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1'>
          <div className='py-5 h-full'>
            <h2 className='font-semibold'>Invertido</h2>
            <h1 className='font-bold text-3xl'>$2</h1>
          </div>

          <div className='m-1 flex flex-col items-center'>
            <h2 className='font-semibold'>Retorno</h2>
            <h1 className='font-bold text-3xl mb-5'>{`$${valor}`}</h1>

            <CircularProgressbar styles={buildStyles({
              pathColor: '#4f46e5'
            })}
            value={valor}
            text=''
            />

          </div>

          <div className='py-5 h-full'>
            <h2 className='font-semibold'>Total</h2>
            <h1 className='font-bold text-3xl'>$2323232</h1>
          </div>
        </div>
  )
}

export default ResumenTotal
