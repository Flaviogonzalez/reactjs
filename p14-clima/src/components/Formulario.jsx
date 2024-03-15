import React, { useState } from 'react'
import useClima from '../hooks/useClima'

export default function Formulario() {
    const { busqueda, datosBusqueda, consultarClima } = useClima()
    const [alerta, setAlerta] = useState('')
    const { ciudad, pais } = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(busqueda).includes('')) {
            setAlerta('si sabes q no tiene nada el input, pone algo al menos')
        }

        consultarClima(busqueda)
    }
  return (
    <div className='contenedor'>

        {alerta && <p>{alerta}</p>}

        <form onSubmit={handleSubmit}>
            <div className='campo'>
                <label htmlFor="ciudad">ciudad</label>

                <input type="text" id='ciudad' name='ciudad' onChange={datosBusqueda} value={ciudad} />
            </div>
            <div className='campo'>
                <label htmlFor="pais">pais</label>
                
                <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
                    <option value="">--seleccione un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa rica</option>
                    <option value="ES">Espana</option>
                    <option value="PE">Peru</option>
                </select>
            </div>


            <input type="submit" value='consultar clima' />
        </form>
    </div>
  )
}
