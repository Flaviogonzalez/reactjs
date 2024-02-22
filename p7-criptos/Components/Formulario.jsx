import styled from '@emotion/styled'
import React, { useState, useEffect} from 'react'
import UseSelectmonedas from '../hooks/UseSelectmonedas'
import { regiones } from '../data/data'
import Error from './Error'


const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map((cripto) => {
                
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        }

        consultarAPI()
    }, [])
    const [ moneda, SelectMonedas ] = UseSelectmonedas('Elige tu moneda', regiones)
    const [ criptomoneda, SelectCripto ] = UseSelectmonedas('Elige tu Criptomoneda', criptos)

    const handleSubmit = (e) => {
        e.preventDefault()

        if([moneda, criptomoneda].includes('') ) {
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

  return (
    <>
        {
            error && <Error>Todos los campos son obligatorios</Error>
        }

        <form action="" onSubmit={handleSubmit}>
            <SelectMonedas/>
            <SelectCripto/>
            <InputSubmit type="submit" value='Cotizar'/>
        </form>
    </>
  )
}

const InputSubmit = styled.input`
    background-color: #9499FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;
    
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;

    }
`

export default Formulario
