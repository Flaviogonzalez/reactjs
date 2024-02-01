import React, {useState} from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setPresupuesto, setMensaje, mensaje, setIsValid, isValid}) => {
  
  return (
    <header >
        <h1>Planificador de Gastos</h1>

        {isValid ? (
          <ControlPresupuesto presupuesto={presupuesto}></ControlPresupuesto>
        ) : (
          <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} mensaje={mensaje} setMensaje={setMensaje} setIsValid={setIsValid}></NuevoPresupuesto>
        )}
    </header>
  )
}

export default Header