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
        disabled: {
          width: '0rem',
        },
        enabled: {
          width: '20rem',
        }
    }

  return (
    <div className='bg-indigo-700 h-screen overflow-hidden transition-all duration-500' style={activarModal ? estilos.enabled : estilos.disabled}>
      {
        opcionesSidebar.map((opcion, index) => ( // opcion es la variable para iterar e index es la variable para identificar cada componente iterado
          <SidebarOption key={index} icon={opcion.icon}> {opcion.text} </SidebarOption>
        ))
      }

      <div className='flex flex-col h-full'>
      <SidebarOption icon='person-fill'>Usuario</SidebarOption>
      <SidebarOption icon='gear'>Configuracion</SidebarOption>

      </div>
    </div>
  )
}

export default Sidebar
