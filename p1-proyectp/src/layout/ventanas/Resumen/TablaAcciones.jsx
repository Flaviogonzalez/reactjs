import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TablaAcciones = () => {

    const random = (Math.random() * (99999999 - 11) + 11).toFixed(0)
    
    console.log(random)

    const rows = [
        {
            id: random,
            nombre: 'ALUA',
            fecha: '6/01/2023',
            cantidad: 25,
            PrecioInicial: 193,
            PrecioFinal: 4825
        },
        {
            nombre: 'TXAR',
            fecha: '10/03/2023',
            cantidad: 40,
            PrecioInicial: 235,
            PrecioFinal: 9420
        },
        {
            nombre: 'AUSO',
            fecha: '24/04/2023',
            cantidad: 88,
            PrecioInicial: 450,
            PrecioFinal: 39600
        },
        {
            nombre: 'COME',
            fecha: '17/07/2023',
            cantidad: 900,
            PrecioInicial: 44,
            PrecioFinal: 39690
        },
        {
            nombre: 'ALUA',
            fecha: '18/08/2023',
            cantidad: 65,
            PrecioInicial: 610,
            PrecioFinal: 39650
        },
    ]
  return (
    <div>
        <Paper elevation={24}>
            <TableContainer>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='left'>Ticker</TableCell>
                            <TableCell align='left'>Fecha</TableCell>
                            <TableCell align='left'>Cantidad</TableCell>
                            <TableCell align='left'>Precio Inicial</TableCell>
                            <TableCell align='left'>Total</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.nombre} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" align='left'> {row.nombre}</TableCell>
                                <TableCell align='left'> {row.fecha}</TableCell>
                                <TableCell align='left'> {row.cantidad}</TableCell>
                                <TableCell align='left'> ${row.PrecioInicial}</TableCell>
                                <TableCell align='left'> ${row.PrecioFinal}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </div>
  )
}

export default TablaAcciones