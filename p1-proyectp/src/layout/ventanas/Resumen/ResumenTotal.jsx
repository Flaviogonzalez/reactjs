import React from 'react'

const ResumenTotal = ({valor, titulo}) => {
  return (
        <div className='bg-gray-300 h-40 w-48 p-3 m-5 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1'>
            <h2 className='font-semibold'>{titulo}</h2>
            <h1 className='font-bold text-3xl'>{`$${valor}`}</h1>
        </div>
  )
}

export default ResumenTotal
