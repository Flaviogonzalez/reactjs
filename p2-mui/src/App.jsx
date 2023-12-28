import { useState } from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Resumen from './components/pages/Resumen'
import './App.css'

function App() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div>
      <Topbar sidebar={sidebar} setSidebar={setSidebar}/>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>

      <Resumen/>
    </div>
  )
}

export default App
