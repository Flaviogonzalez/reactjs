
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
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListDivider from '@mui/joy/ListDivider';
import Button from '@mui/joy/Button';
import { useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';






const Resumen = () => {
  const [mostrar, setMostrar] = useState(false);
  const elemLongitud = mostrar ? tickers.length : 5;
  const tickersReduce = tickers.slice(0, elemLongitud);

  return (
    <div>
      <Container maxWidth={false} sx={{display: 'flex', bgcolor: '#101418', width: '100%', height: '100%'}}>
        <Container sx={{p: 3, display: 'flex', gap: 2}}>
          <Card variant='outlined' sx={{bgcolor: '#101418', p: 2, width: 200, height: 175}}>
            <Typography textColor={'common.white'}>Invertido</Typography>
            <Divider />

          </Card>
          
          <Card variant='outlined' sx={{bgcolor: '#101418', p: 2, width: 200, height: 175}}>
            <Typography textColor={'common.white'} >Diferencia</Typography>
            <Divider  />
            <Typography textColor={'common.white'} level='h3'>$9999</Typography>
            {/* <LinearProgress size='lg' thickness={1} determinate value={100} /> */}
          </Card>
          <Card variant='outlined' sx={{bgcolor: '#101418', p: 2, width: 200, height: 175}}>
            <Typography textColor={'common.white'}>Total</Typography>
            <Divider />

          </Card>

        </Container>


        <Box sx={{m: 3, p: 2 , border: '1px solid #21252a', borderRadius: 8}}>
          <List>            

          {tickersReduce.map((t) => (
            <ListItem sx={{width: 200}}>
              <ListItemContent>
                <Typography textColor={'common.white'} level='title-sm' >{t.ticker}</Typography>
                <Typography textColor={'background.level1s'} level='body-sm' >{t.nombre}</Typography>
                <Typography color='#000000' textColor={'common.white'} level='h5' >${t.precio}</Typography>
              </ListItemContent>
            </ListItem>
            
          ))}
          

          </List>

            <Button variant='outlined' sx={{border: '1px solid #21252a', ":hover": {backgroundColor: '#0d1013'}}} onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Mostrar menos' : 'Mostrar mas'}</Button>
        </Box>

      </Container>
    </div>
  )
}

export default Resumen