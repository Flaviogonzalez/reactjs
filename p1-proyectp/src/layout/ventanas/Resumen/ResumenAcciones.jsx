import React, {useState} from 'react'
import  TablaAcciones  from './TablaAcciones'




const ResumenAcciones = () => {
    const [accion, setAccion] = useState([]) // lo voy a tener para guardar acciones por si compro mas o etc


  return (
    <div className='bg-gray-300 p-5 m-5 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1'>
        <TablaAcciones></TablaAcciones>
    </div>
  )
}

export default ResumenAcciones