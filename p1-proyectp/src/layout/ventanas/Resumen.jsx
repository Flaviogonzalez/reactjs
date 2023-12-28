import React, { useEffect, useState } from 'react'
import ResumenTotal from './Resumen/ResumenTotal'
import ResumenInvertido from './Resumen/ResumenInvertido'
import Grid from '@mui/material/Grid';

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
    <div>
      <Grid container spacing={0}>
        <Grid item xs md>
          <ResumenTotal porcentaje={porcentaje} retorno={retorno} invertido={invertido} total={total}/>
        </Grid>
        <Grid item xs md>
          <ResumenInvertido/>
        </Grid>
      </Grid>

      
    </div>  
  )
}

export default Resumen
