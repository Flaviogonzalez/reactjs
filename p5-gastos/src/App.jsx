import { useEffect, useState } from 'react'
import Header from './components/Header'
import nuevoGasto from "./img/nuevo-gasto.svg"
import { Modal } from './components/Modal'
import { formatFecha, generarID } from './helpers'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'

function App() {
  const [presupuesto, setPresupuesto] = useState(localStorage.getItem('presupuesto') ?? 0) // busca si hay valores en localstorage y retorna esos valores, no obstante, si no encuentra nada inicializa en cero
  const [isValid, setIsValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []) // lo mismo aca
  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
  
      setTimeout(() => {
        setAnimation(true)
      }, 350)
    }
  }, [gastoEditar])

  useEffect(() => { // guarda en localstorage el presupuesto
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => { // guarda los gastos en localstorage
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => { // valida el presupuesto
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if (presupuestoLS > 0) {
      setIsValid(true)
    }
  }, [])

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])

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
      setGastoEditar({})

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

  const eliminarGasto = id => {
    gastoActualizado = gastos.filter( gasto => gasto.id !== id)

    setGastos(gastoActualizado)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header setGastos={setGastos} presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValid={isValid} setIsValid={setIsValid} gastos={gastos}></Header>


      {isValid && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro}></Filtros>
            <ListadoGastos filtro={filtro} gastosFiltrados={gastosFiltrados} eliminarGasto={eliminarGasto} setGastoEditar={setGastoEditar} gastos={gastos}></ListadoGastos>
          </main>

          <div className='nuevo-gasto'>
            <img src={nuevoGasto} alt="Gasto" onClick={handleNuevoGasto} />
          </div>
        </>
      )}

      {modal && (
        <Modal setGastoEditar={setGastoEditar} setModal={setModal} animation={animation} setAnimation={setAnimation} guardarGasto={guardarGasto} gastoEditar={gastoEditar} ></Modal>
      )}
    </div>
  )
}

export default App
