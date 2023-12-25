import React from 'react'
import SidebarOption from './Sidebar/SidebarOption'

const Sidebar = ({activarModal}) => {
  const opcionesSidebar = [
    {icon: 'activity', text: 'Resumen'},
    {icon: 'graph-up', text: 'Cotizaciones'},
    {icon: 'book', text: 'Balances'},
    {icon: 'bank', text: 'Dolar'},
    {icon: 'calendar', text: 'Calendario'},
  ]
  

    const estilos = {
        disabled: '-translate-x-96',
        enabled: 'translate-x-2'
    }

  return (
    <div className={`z-50 fixed flex flex-col bg-indigo-900  h-4/5 top-2/4 left-0 -translate-y-2/4 mx-5 rounded-xl shadow-2xl overflow-hidden w-64 transition-all duration-1000 ${activarModal ? estilos.enabled : estilos.disabled}`}>
      {
        opcionesSidebar.map((opcion, index) => ( // opcion es la variable para iterar e index es la variable para identificar cada componente iterado (el index es obligatorio)
          <SidebarOption key={index} icon={opcion.icon}> {opcion.text} </SidebarOption>
        ))
      }

      <div className='flex flex-col h-full justify-end'>
      <SidebarOption icon='person-fill'>Usuario</SidebarOption>
      <SidebarOption icon='gear'>Configuracion</SidebarOption>

      </div>
    </div>
  )
}

export default Sidebar
