import React from 'react'
import useClima from '../hooks/useClima'

export default function Resultado() {

    const { resultado } = useClima()
    console.log(resultado)

    const {name, main} = resultado
    const {temp, temp_min, temp_max} = main

    // kelvin
    const kelvin = 273.15

  return (
    <div className='contenedor clima'>
        <h2>El Clima de {name} es: </h2>
        <p>{parseInt(temp - kelvin)} <span>&#x2103;</span></p>
        <div className='temp'>
            <p>Min {parseInt(temp_min - kelvin)} <span>&#x2103;</span></p>
            <p>Max {parseInt(temp_max - kelvin)} <span>&#x2103;</span></p>
        </div>
    </div>
  )
}
