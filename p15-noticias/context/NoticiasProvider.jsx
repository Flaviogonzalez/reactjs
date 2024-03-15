import { useState, useEffect, createContext } from "react";
import axios from 'axios'

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState('business')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(0)

    const handleChange = e => {
        setCategoria(e.target.value)
    }

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios(url)
            setNoticias(data.articles)
            setTotalPaginas(data.totalResults)
        }
        consultarAPI()
    }, [])

    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChange,
            noticias
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext