import { useEffect, useState } from 'react'
import Header from './components/Header'
import nuevoGasto from "./img/nuevo-gasto.svg"
import { Modal } from './components/Modal'
import { formatFecha, generarID } from './helpers'
import ListadoGastos from './components/ListadoGastos'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValid, setIsValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
  
      setTimeout(() => {
        setAnimation(true)
      }, 350)
    }
  }, [gastoEditar])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimation(true)
    }, 350)
  }

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      // actualizar gasto
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState  ) 
      setGastos(gastosActualizados)
    } else {
      // nuevo gasto
      gasto.id = generarID()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setAnimation(false)
  
    setTimeout(() => {
        setModal(false)
    }, 350);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValid={isValid} setIsValid={setIsValid} gastos={gastos}></Header>


      {isValid && (
        <>
          <main>
            <ListadoGastos setGastoEditar={setGastoEditar} gastos={gastos}></ListadoGastos>
          </main>

          <div className='nuevo-gasto'>
            <img src={nuevoGasto} alt="Gasto" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {modal && (
        <Modal setModal={setModal} animation={animation} setAnimation={setAnimation} guardarGasto={guardarGasto} gastoEditar={gastoEditar} ></Modal>
      )}
    </div>
  )
}

export default App
