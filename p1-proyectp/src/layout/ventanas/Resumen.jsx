import React from 'react'
import ResumenTotal from './Resumen/ResumenTotal'

const Resumen = () => {

  const total = [
    {titulo: 'Invertido', dato: ''},
    {titulo: 'Retorno/Diferencia', dato: ''},
    {titulo: 'Total', dato: ''},
  ]

  return (
    <div className='grid grid-cols-3 w-fit'>
      {
        total.map((i, index) => (
          <ResumenTotal key={index} titulo={i.titulo} valor={i.dato}/>
        ))
      }
    </div>  
  )
}

export default Resumen
