import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [mensaje, setMensaje] = useState('')
  const [isValid, setIsValid] = useState(false)

  return (
    <div>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} mensaje={mensaje} setMensaje={setMensaje} isValid={isValid} setIsValid={setIsValid}></Header>

      <div className='nuevo-gasto'>

      </div>
    </div>
  )
}

export default App
