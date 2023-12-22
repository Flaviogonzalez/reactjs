import { useState } from 'react'
import Topbar from './layout/Topbar'
import Sidebar from './layout/Sidebar'
import './App.css'
import Resumen from './layout/ventanas/Resumen';

function App() {
  const [activarSidebar, setActivarSidebar] = useState(false);
  
  return (
    <>
      <div className='w-screen flex flex-row'>

        <Sidebar activarModal={activarSidebar}></Sidebar>

        <div className='w-full'>
          <Topbar setActivarSidebar={setActivarSidebar} activarSidebar={activarSidebar}/>
          <Resumen/>
        </div>
      </div>
    </>
  )
}

export default App
