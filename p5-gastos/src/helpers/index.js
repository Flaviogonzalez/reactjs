export const generarID = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export const formatFecha = (fecha) => {
    const fechax = new Date(fecha);


    return fechax.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
}