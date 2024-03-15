import React, {useState, createContext} from 'react'
import axios from 'axios'

const ClimaContext = createContext()


function ClimaProvider({children}) {
    const [busqueda, setBusqueda] = useState({
        pais: '',
        ciudad: ''
    })

    const [resultado, setResultado] = useState({})

    const consultarClima = async datos => {

        try {
            const {ciudad, pais} = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
            
            const {data} = await axios(url)
            const {lat, lon} = data[0]


            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const {data: dataClima} = await axios(urlClima)

            setResultado(dataClima)
        } catch (error) {
            console.log(error)
        }
    }

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })

    }

  return (
    <ClimaContext.Provider value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado
    }}>
        {children}
    </ClimaContext.Provider>
  )
}

export {
    ClimaProvider
}

export default ClimaContext
