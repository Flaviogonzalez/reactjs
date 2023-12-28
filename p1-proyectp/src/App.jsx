import { useState } from 'react'
import Topbar from './layout/Topbar'
import Sidebar from './layout/Sidebar'
import './App.css'
import Resumen from './layout/ventanas/Resumen';


function App() {
  const [activarSidebar, setActivarSidebar] = useState(false);
  
  return (
    <>
      <div>
        <Sidebar activarModal={activarSidebar}></Sidebar>
        <Topbar setActivarSidebar={setActivarSidebar} activarSidebar={activarSidebar}/>

        <div className='my-16'>
          <Resumen/>
        </div>
      </div>
    </>
  )
}

export default App
