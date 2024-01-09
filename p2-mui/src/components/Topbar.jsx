import { useState } from 'react'


import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu } from '@mui/icons-material'
import { Autocomplete, AutocompleteOption, ListItemDecorator, ListItemContent } from '@mui/joy'
import { tickers } from '../data/TickerBCRA'
import { TextField } from '@mui/material'



const Topbar = ({sidebar, setSidebar}) => {


    const icons = createTheme({
      palette: {
        white: {
          main: '#FFFFFF',
          light: '#E9DB5D',
          dark: '#A29415',
          contrastText: '#242105',
        },
      },
    });

  return (
    <div>
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton size='large' sx={{mr: 2}} color='inherit' edge='start' aria-label="menu" onClick={() => (setSidebar(!sidebar))}>
                    <Menu/>
                </IconButton>


                <Typography variant="h5">
                    FinanceApp
                </Typography>

              <Autocomplete freeSolo placeholder='Buscar Tickers...' sx={{
                p: 0,
                'MuiAutocomplete-listbox-scroll': {
                  backgroundColor: '#FFF'
                },
                width: 300, 
                ml: 4, 
                bgcolor: '#101418', 
                borderColor: '#1f262e',
                }}
                renderOption={(props, option) => (
                  <AutocompleteOption sx={{backgroundColor: '#101418',}} {...props}>
                      <ListItemContent>
                        <Typography color={'common.white'}> {option.ticker} </Typography>

                        <Typography>{option.nombre}</Typography>
                      </ListItemContent>
                  </AutocompleteOption>
                )}
                options={tickers} getOptionLabel={(option) => option.ticker} getOptionKey={(option) => option.id}/>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Topbar