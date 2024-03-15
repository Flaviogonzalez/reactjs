export const MARCAS = [
    {
        id: 1,
        nombre: 'europeo',
    },
    {
        id: 2,
        nombre: 'americano',
    },
    {
        id: 3,
        nombre: 'asiatico'
    }
]

export const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from( new Array(25), (valor, index) => YEARMAX - index);

export const PLANES = [
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Completo'}
]