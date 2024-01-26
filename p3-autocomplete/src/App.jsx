import { useState } from 'react'
import './App.css'
import Autocomplete from './components/Autocomplete'

function App() {
  const aver = [
    {
    name: 'jose',
    edad: 47,
    key: 1,
    },
    {
      name: 'flavio',
      edad: 20,
      key: 2,
    },
    {
      name: 'alan',
      edad: 21,
      key: 3,
    },
    {
      name: 'denis',
      edad: 21,
      key: 4,
    },
    {
      name: 'juan',
      edad: 21,
      key: 5,
    },
    {
      name: 'matias',
      edad: 21,
      key: 6,
    },
    {
      name: 'alberto',
      edad: 21,
      key: 7,
    },
    {
      name: 'esquivel',
      edad: 21,
      key: 8,
    },
    {
      name: 'de la vega',
      edad: 21,
      key: 9,
    },
    {
      name: 'adrian',
      edad: 21,
      key: 10,
    },
    {
      name: 'maximiliano',
      edad: 21,
      key: 11,
    },
    {
      name: 'ivan',
      edad: 21,
      key: 12,
    },
    {
      name: 'francisco',
      edad: 21,
      key: 13,
    },
    {
      name: 'isaiah',
      edad: 21,
      key: 14,
    },
    {
      name: 'romina',
      edad: 21,
      key: 15,
    },
    {
      name: 'aylen',
      edad: 21,
      key: 16,
    },
    {
      name: 'lopez',
      edad: 21,
      key: 17,
    },
    {
      name: 'antonella',
      edad: 21,
      key: 18,
    },
    {
      name: 'candela',
      edad: 21,
      key: 19,
    },
    {
      name: 'daniela',
      edad: 21,
      key: 20,
    },
    {
      name: 'paola',
      edad: 21,
      key: 21,
    },
    {
      name: 'milagros',
      edad: 21,
      key: 22,
    },
    {
      name: 'federico',
      edad: 21,
      key: 23,
    },
    {
      name: 'roger',
      edad: 21,
      key: 24,
    },
    {
      name: 'pablo',
      edad: 21,
      key: 25,
    },
    {
      name: 'rodrigo',
      edad: 21,
      key: 26,
    },
    {
      name: 'daniel',
      edad: 21,
      key: 27,
    },

  ]

  return (
    <>
      <Autocomplete array={aver} placeholder={'Buscar personas'}/>
    </>
  )
}

export default App
