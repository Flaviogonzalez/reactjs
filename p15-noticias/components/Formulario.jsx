import { FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material'
import React from 'react'
import UseNoticias from '../hooks/useNoticias'

export default function Formulario() {
    
    const {categoria, handleChange} = UseNoticias()

    const CATEGORIAS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select onChange={handleChange} value={categoria} label='Categorias'>
                {CATEGORIAS.map((i) => (
                    <MenuItem key={i.value} value={i.value}>
                        {i.label}
                    </MenuItem>
                ))}
            </Select>

            <Box sx={{
                marginTop: '20px'
            }}>
                <Button fullWidth variant='contained'>
                    Buscar Noticias
                </Button>
            </Box>
        </FormControl>
    </form>
  )
}
