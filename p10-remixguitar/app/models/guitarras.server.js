export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=media`) 
    const resultado = await respuesta.json()
    return resultado
}

export async function getGuitarra({url}) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=*`)
    const resultado = await respuesta.json()
    return resultado
}