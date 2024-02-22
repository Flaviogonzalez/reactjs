import styled from '@emotion/styled'
import React, { useState } from 'react'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 14px;
`

const UseSelectmonedas = (label, data) => {
    const [state, setState] = useState('')

  const selectMonedas = () => {
    return (
        <>
            <Label htmlFor="">{label}</Label>
            
            <Select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="">Seleccione</option>
                {data.map( option => (
                    <option key={option.id} value={option.id}>{option.nombre}</option>
                ))}
            </Select>
        </>
    )
  }

  return [ state, selectMonedas ]
}

export default UseSelectmonedas
