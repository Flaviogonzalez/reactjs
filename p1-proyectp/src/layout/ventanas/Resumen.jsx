import React, { useState } from 'react'
import ResumenTotal from './Resumen/ResumenTotal'

const Resumen = () => {
  const [porcentaje, setPorcentaje] = useState(88);
  const [invertido, setInvertido] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className='grid mq:w-full '>
      <ResumenTotal valor={porcentaje}/>
    </div>  
  )
}

export default Resumen
