
import { comprasDeAcciones, tickers } from '../../data/TickerBCRA'
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
import React, { useState } from 'react'
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';







const Resumen = () => {
  const [mostrar, setMostrar] = useState(false);
  const elemLongitud = mostrar ? tickers.length : 5;
  const tickersReduce = tickers.slice(0, elemLongitud);

  const cardStyle = {
    bgcolor: '#101418', 
    p: 2, 
    width: 200, 
    height: 175
  }

  const containerStyle = {
    display: 'flex', 
    bgcolor: '#101418', 
    width: '100%', 
    height: '100%'
  }


  return (
    <div>
      <Container maxWidth={false} sx={containerStyle}>
        <Box> 
          <Box sx={{p: 3, display: 'flex', gap: 2}}>
            <Card variant='outlined' sx={cardStyle}>
              <Typography textColor={'common.white'}>Invertido</Typography>
              <Divider />
              
            </Card>
            
            <Card variant='outlined' sx={cardStyle}>
              <Typography textColor={'common.white'} >Diferencia</Typography>
              <Divider  />
              <Typography textColor={'common.white'} level='h3'>$9999</Typography>
              {/* <LinearProgress size='lg' thickness={1} determinate value={100} /> */}
              
            </Card>
            <Card variant='outlined' sx={cardStyle}>
              <Typography textColor={'common.white'}>Total</Typography>
              <Divider />

            </Card>
          </Box>

          <Box sx={{display: 'flex'}}>
            <Sheet variant='outlined' sx={{m: 3, borderRadius: 8, backgroundColor: 'transparent',}} >
              <Table hoverRow>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Ticker</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Precio Final</th>
                  </tr>
                </thead>

                <tbody>
                  {comprasDeAcciones.map((i) => (
                    <tr>
                      <td>{i.fechaCompra}</td>
                      <td>{i.ticker}</td>
                      <td>${i.precioCompra}</td>
                      <td>{i.cantidadAcciones}</td>
                      <td>${i.precioFinal}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Sheet>

            <Sheet color='success' variant='outlined' sx={{m: 3, borderRadius: 8, backgroundColor: 'transparent',}} >
              <Table sx={{}} hoverRow>
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Precio hoy</th>
                    <th>Precio Final</th>
                  </tr>
                </thead>

                <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>$</td>
                    </tr>
                </tbody>
              </Table>
            </Sheet>

            
          </Box>
          
        </Box>
        

        <Box sx={{m: 3, p: 2 , border: '1px solid #21252a', borderRadius: 8}}>
          <List>
            {tickersReduce.map((t, index) => (
              <React.Fragment key={t.ticker}>
                <ListItem sx={{width: 200}}>
                  <ListItemContent>
                    <Typography textColor={'common.white'} level='title-sm'>{t.ticker}</Typography>
                    <Typography textColor={'background.level1s'} level='body-sm'>{t.nombre}</Typography>
                    <Typography color='#000000' textColor={'common.white'} level='h5'>${t.precio}</Typography>
                  </ListItemContent>
                </ListItem>
                {index !== tickersReduce.length - 1 && <ListDivider />} 
              </React.Fragment>
            ))}
          </List>
          <Button variant='outlined' sx={{width: '100%' ,border: '1px solid #21252a', ":hover": {backgroundColor: '#0d1013'}}} onClick={() => setMostrar(!mostrar)}>
            {mostrar ? 'Mostrar menos' : 'Mostrar mas'}
          </Button>
        </Box>


      </Container>
    </div>
  )
}

export default Resumen