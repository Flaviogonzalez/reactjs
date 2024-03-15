import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
export default function Noticia({noticia}) {

    const {urlToImage, url, title, description, source } = noticia
    console.log(title)
  return (
    <Grid item md={6} lg={4}>
        <Card>
            <CardMedia height={250} component={'img'} alt={`imagen de la noticia ${title}`} image={urlToImage}/>
            <CardContent>
                <Typography variant='body1' color={'error'}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  )
}
