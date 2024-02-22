import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from '../Components/Formulario'
import Resultado from '../Components/Resultado'
import Spinner from '../Components/Spinner'

const Imagen = styled.img`
  max-width: 400px ;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Titulo = styled.h1`
  font-family: "Lato", sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }

`
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0 ) {
      console.log(monedas)

      const cotizarCripto = async () => {
        setCargando(true)
        setCotizacion({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptomoneda}&tsyms=${monedas.moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCotizacion(resultado.DISPLAY[monedas.criptomoneda][monedas.moneda])
        setCargando(false)
      }

      cotizarCripto()
    }
  }, [monedas])

  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto} alt='una imagen lol'/>

        <div>
          <Titulo>Cotiza Criptomonedas al instante</Titulo>

          <Formulario setMonedas={setMonedas}/>
          {cargando && <Spinner/>}
          {cotizacion.PRICE && <Resultado cotizacion={cotizacion}/>}
        </div>
      </Contenedor>
    </>
  )
}


export default App
