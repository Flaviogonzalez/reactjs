import { useState } from 'react'
import styled from '@emotion/styled'


const Titulo = styled.h1`
  color: #FFF;

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo>HOLA</Titulo>
    </>
  )
}


export default App
