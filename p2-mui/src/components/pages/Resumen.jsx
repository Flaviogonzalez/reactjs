import React from 'react'
import { tickers } from '../../data/TickerBCRA'
import * as mui from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/joy/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Container from '@mui/material/Container'
import Card from '@mui/joy/Card';




const Resumen = () => {
  return (
    <div>
      <Container maxWidth="md">
        hola
      </Container>

      <Container maxWidth={false} sx={{display: 'grid',paddingTop: 3 ,gap: 3 ,gridTemplateColumns: 'repeat(5, 1fr)' , bgcolor: '#101418', width: '100%', height: '100%'}}>
        {tickers.map((t) => (
          <Card variant='outlined' key={t.id} sx={{bgcolor: '#101418', p: 2,}}>
            <Typography color='primary' level='title-lg' >{t.ticker}</Typography>
            <Typography color='warning' level='body-sm' >{t.nombre}</Typography>
            <Typography color='#000000' textColor={'common.white'} level='h2' >${t.precio}</Typography>
          </Card>
        ))}
      </Container>
    </div>
  )
}

export default Resumen