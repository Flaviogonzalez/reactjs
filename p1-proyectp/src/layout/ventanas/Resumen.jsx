import React, { useEffect, useState } from 'react'
import ResumenTotal from './Resumen/ResumenTotal'
import ResumenAcciones from './Resumen/ResumenAcciones'

const Resumen = () => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [retorno, setRetorno] = useState(0);
  const [invertido, setInvertido] = useState(133185);
  const [total, setTotal] = useState(352225);

  useEffect(() => {
    const diferencia = total - invertido
    setRetorno(diferencia)

    const nuevoPorcentaje = ((total / invertido - 1) * 100).toFixed(2);
    setPorcentaje(nuevoPorcentaje)
  }, [])

  return (
    <div className=''>
      <ResumenTotal porcentaje={porcentaje} retorno={retorno} invertido={invertido} total={total}/>
      <ResumenAcciones></ResumenAcciones>
      
    </div>  
  )
}

export default Resumen
