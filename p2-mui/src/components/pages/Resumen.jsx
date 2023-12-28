import React from 'react'
import * as mui from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Container from '@mui/material/Container'



const Resumen = () => {
  return (
    <div>
        <Container maxWidth="false" sx={{bgcolor: '#3d3d3d',paddingTop: 10}}>
            <Container maxWidth="xl" sx={{bgcolor: '#5d5d5d'}}>
                <Typography sx={{fontWeight: 'bold'}} variant="h1" color="inherit">Flaco, Calmate un poco</Typography>
            </Container>
        </Container>

    </div>
  )
}

export default Resumen