import React from 'react'
import { useCotizador } from '../hooks/useCotizador'

export default function Error() {
    const {error} = useCotizador()

  return (
    <div>
        {error}
    </div>
  )
}
