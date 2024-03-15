import React from 'react'
import AppSeguro from './components/AppSeguro'
import { CotizadorProvider } from './context/CotizadorContext'

export default function App() {
  return (
    <CotizadorProvider value={{}}>
      <AppSeguro/>
    </CotizadorProvider>
  )
}
