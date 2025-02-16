import {Grid, Typography, Container} from '@mui/material'
import Formulario from '../components/Formulario'
import ListadoNoticias from '../components/ListadoNoticias'
import { NoticiasProvider } from '../context/NoticiasProvider'

function App() {

  return (
    <>
      <NoticiasProvider>
        <Container>
          <header>
            <Typography align='center' marginY={5} variant='h3' component={'h1'}>
              Noticias
            </Typography>
          </header>
          <Grid container direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} md={6} lg={4}>
              <Formulario/>
            </Grid>
          </Grid>

          <ListadoNoticias/>
        </Container>
      </NoticiasProvider>
    </>
  )
}

export default App
