import styled from '@emotion/styled'
import React from 'react'

const ErrorMensaje = styled.div`
    background-color: #B7322C;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`


const Error = ({children}) => {
  return (
    <ErrorMensaje>
      {children}
    </ErrorMensaje>
  )
}

export default Error
