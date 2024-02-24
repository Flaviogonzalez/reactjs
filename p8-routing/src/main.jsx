import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import './index.css'
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente, {loader as EditarClienteLoader, action as EditarClienteAction} from './pages/EditarCliente'
import Cliente, {action as EliminarClienteAction} from './components/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: EditarClienteLoader,
        action: EditarClienteAction,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: '/clientes/:clienteId/eliminar',
        element: '',
        action: EliminarClienteAction
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
