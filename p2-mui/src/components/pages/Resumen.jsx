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
import LinearProgress from '@mui/joy/LinearProgress';
import CircularProgress from '@mui/joy/CircularProgress';
import Divider from '@mui/joy/Divider'





const Resumen = () => {
  return (
    <div>
      <Container maxWidth={false} sx={{display: 'flex', bgcolor: '#101418', width: '100%', height: '100%'}}>
        <Container sx={{p: 3, display: 'flex', gap: 2}}>
          <Card variant='outlined' sx={{bgcolor: '#101418', p: 2, width: 200, height: 175}}>
            <Typography textColor={'common.white'} level='h3'>Invertido</Typography>
            <Divider sx={{maxWidth: '99%'}} />

          </Card>
          
          <Card variant='outlined' sx={{bgcolor: '#101418', p: 2, width: 200, height: 175}}>
            <Typography textColor={'common.white'} level='h3'>Diferencia</Typography>
            <Divider sx={{maxWidth: '99%'}} />
            <Typography textColor={'common.white'} level='h2'>$9999</Typography>
            {/* <LinearProgress size='lg' thickness={1} determinate value={100} /> */}
          </Card>
          <Card variant='outlined' sx={{bgcolor: '#101418', p: 2, width: 200, height: 175}}>
            <Typography textColor={'common.white'} level='h3'>Total</Typography>
            <Divider sx={{maxWidth: '99%'}} />

          </Card>

        </Container>


        <Container sx={{display: 'grid', py: 3 ,gap: 3 ,gridTemplateColumns: 'repeat(2, 1fr)' , }}>
          {tickers.map((t) => (
            <Card variant='outlined' key={t.id} sx={{bgcolor: '#101418', p: 2,}}>
              <Typography color='primary' level='title-lg' >{t.ticker}</Typography>
              <Typography color='warning' level='body-sm' >{t.nombre}</Typography>
              <Typography color='#000000' textColor={'common.white'} level='h2' >${t.precio}</Typography>
              
            </Card>
          ))}
        </Container>

      </Container>
    </div>
  )
}

export default Resumen