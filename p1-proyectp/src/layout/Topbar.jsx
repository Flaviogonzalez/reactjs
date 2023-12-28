import React, { useState } from 'react'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Topbar = ({setActivarSidebar, activarSidebar}) => {
  const theme = createTheme({
    palette: {
      ochre: {
        main: '#efeeff', // cambia de color el icono mas q nada
        light: '#cbc7fe',
        dark: '#1f1b4b',
      }
    }
  })

  return (
    <>
    <div className=' fixed right-0 top-0 bg-indigo-700 flex justify-between gap-2 px-3 py-2 content-center h-fit w-full shadow-md z-50' >
      <div className='flex flex-row gap-3'>
        <button onClick={ () => {setActivarSidebar(!activarSidebar)} }>
          <i className="bi bi-list transition-all duration-300 text-2xl px-2 text-white hover:cursor-pointer rounded-md hover:bg-indigo-800"></i>
        </button>
        <h1 className='font-bold text-2xl text-white'>FinanceApp</h1>
      </div>

      <div className=''>
        <ThemeProvider theme={theme}>
          <IconButton color='ochre'>
            <AddIcon/>
          </IconButton>
        </ThemeProvider>
      </div>
    </div>
    </>
  )
}

export default Topbar
