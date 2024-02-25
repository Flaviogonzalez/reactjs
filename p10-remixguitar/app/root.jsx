import {Meta} from '@remix-run/react'

export function meta() {
    return(
        {
            charset: 'UTF-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width, initial-scale=1'
        }
    )
}

export default function app() {
    return (
        <Document>
            HOLA
        </Document>
    )
}

function Document({children}) {
    return (
        <html>
            <head lang="es">
                <Meta/>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}