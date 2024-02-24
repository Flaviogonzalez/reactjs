import React from 'react'
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { agregarClientes } from '../data/Clientes'

export async function action({request}) {
  const Errores = []
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  const email = formData.get('email') // comprobar que un email tenga la expresion correcta.
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    Errores.push('el email no es valido')
  }

  
  if (Object.values(datos).includes('')) {
    Errores.push('todos los campos son obligatorios')
  }

  if (Object.keys(Errores).length > 0) {
    return Errores
  }

  await agregarClientes(datos)

  return redirect('/'); // redirecciona tras completar el formulario
}

const NuevoCliente = () => {
  const errores = useActionData()
  const navigate = useNavigate()
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente.</p>

      <div className='justify-end flex'>
        <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase' onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

        {errores?.length && errores.map((error, i) => (<Error key={i}>{error}</Error>))}

        <Form method='post' noValidate >
          <Formulario/>

          <input type="submit" className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg ' value='registrar cliente' />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente
