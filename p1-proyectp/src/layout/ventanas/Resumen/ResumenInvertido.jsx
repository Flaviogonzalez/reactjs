import React, {useState} from 'react'
import  TablaInvertido  from './TablaInvertido'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ResumenInvertido = () => {
  const [accion, setAccion] = useState([]) // lo voy a tener para guardar acciones por si compro mas o etc

  const theme = createTheme({
    palette: {
      fondogris: {
        main: '#363636', // cambia de color el icono mas q nada
        light: '#cbc7fe',
        dark: '#1f1b4b',
      }
    }
  })

  return (
    <div className='bg-gray-300 p-5 m-5 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1'>
      <div className='my-1 flex justify-end'>
        <ThemeProvider theme={theme}>
          <IconButton color='fondogris'>
            <AddIcon/>
          </IconButton>
        </ThemeProvider>
      </div>

      <TablaInvertido/>
    </div>
  )
}

export default ResumenInvertido