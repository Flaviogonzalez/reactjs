import React from 'react'
import Drawer from '@mui/joy/Drawer';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';

import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Sidebar = ({sidebar, setSidebar}) => {
    const SidebarOptions = [
        {
            nombre: 'Resumen',
            icon: <HomeIcon fontSize='medium' color='primary'/>,
        },
        {
            nombre: 'Calendario',
            icon: <CalendarMonthIcon fontSize='medium' color='primary'/>,
        },
        {
            nombre: 'Cotizaciones',
            icon: <WaterfallChartIcon fontSize='medium' color='primary'/>,
        },
        {
            nombre: 'Balances',
            icon: <AccountBalanceIcon fontSize='medium' color='primary'/>,
        },
        {
            nombre: 'Dolar',
            icon: <AttachMoneyIcon fontSize='medium' color='primary'/>,
        },
    ]

    const toggleDrawer = (inOpen) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setSidebar(inOpen);
    };
  
  return (
    <div>
        <Drawer color='primary' variant='plain' size='sm' open={sidebar} onClose={toggleDrawer(false)}>
            <Box role="presentation" sx={{display: 'flex', flexDirection: 'column', height: '100%'}} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                <ModalClose/>
                <DialogTitle sx={{p: 3}}>FinanceApp</DialogTitle>
                <Divider/>
                <List>
                {SidebarOptions.map((i) => (
                    <ListItem>
                        <ListItemButton sx={{p: 1}}>
                            {i.icon}
                            {i.nombre}
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>
                <Divider/>

            </Box>
        </Drawer>
    </div>
  )
}

export default Sidebar