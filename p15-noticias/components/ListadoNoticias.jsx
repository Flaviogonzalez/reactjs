import { Grid, Typography } from '@mui/material'
import React from 'react'
import UseNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'

export default function ListadoNoticias() {

    const {noticias} = UseNoticias()
  return (
    <>
        <Typography textAlign={'center'} my={5} variant='h3' component={'h2'}>
            Ultimas Noticias
        </Typography>

        <Grid container spacing={2}>
            {noticias.map((i) => (
                <Noticia key={i.url} noticia={noticias}/>
            ))}
        </Grid>
    </>
  )
}
