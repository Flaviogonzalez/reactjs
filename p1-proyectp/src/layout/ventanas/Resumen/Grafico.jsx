import React from 'react'
import { ChartsAxis, LineChart } from '@mui/x-charts'

const Grafico = () => {
    const series = [ // la serie tiene que ser si o si: UN ARRAY DE OBJETOS
        {
            ticker: 'ALUA', // el ticker sirve como 'key'
            price: '23',
            date: 2023, // sirve para el x Axis
        },
        {
            ticker: 'ALUA',
            price: '78',
            date: 2024,
        },
        {
            ticker: 'ALUA',
            price: '129',
            date: 2025,
        },
        {
            ticker: 'ALUA',
            price: '223',
            date: 2026,
        },
        {
            ticker: 'ALUA',
            price: '546',
            date: 2027,
        },
        {
            ticker: 'ALUA',
            price: '998',
            date: 2028,
        },
    ];

    const label = { // cosa de que yo pase el mouse encima y aparezca este mensaje
        price: 'su valor cotizado en bolsa'
    }

    const color = { // colores de los valores
        price: 'green',
    }

    const stackStrategy = {
        stack: 'total',
        area: false,
        stackOffset: 'none', // To stack 0 on top of others
    };

  return (
    <div>
        <LineChart 

        xAxis={[ // javascript -> array -> object
            {
            dataKey: 'date', 
            valueFormatter: (v) => v.toString(), 
            min: 2023, max: 2028
            } 
        ]}  
        series={ // para q aparezca el label imagino xd

            Object.keys(label).map((key) => ({ // javascript -> function -> function -> object
                dataKey: key, 
                label: label[key], 
                color: color[key], 
                showMark: false,
                ...stackStrategy
            }))}
                
        dataset={series} 
        
        width={1000}
        
        height={300}/>
    </div>
  )
}

export default Grafico