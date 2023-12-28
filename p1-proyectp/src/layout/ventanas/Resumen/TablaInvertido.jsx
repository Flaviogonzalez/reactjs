import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResumenInvertido, { rows } from '../../../data/ResumenInvertido'

const TablaInvertido = () => {
    
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
                            <TableCell align='left'>Total Invertido</TableCell>
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

export default TablaInvertido