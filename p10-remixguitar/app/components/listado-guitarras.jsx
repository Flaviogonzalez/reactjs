import React from 'react'
import Guitarra from "~/components/guitarra";

export default function ListadoGuitarras({guitarras}) {
  return (
    <>
        {guitarras.length && (
            <div className='guitarras-grid'>
                {guitarras.map(guitarra => (
                <Guitarra guitarra={guitarra.attributes} key={guitarra.id}/>
                ))}
            </div>
        )}
    </>
  )
}
