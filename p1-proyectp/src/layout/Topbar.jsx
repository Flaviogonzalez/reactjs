import React, { useState } from 'react'

const Topbar = ({setActivarSidebar, activarSidebar}) => {
  return (
    <>
    <div className=' fixed right-0 top-0 bg-indigo-700 flex gap-2 px-3 py-3 content-center h-14 w-full shadow-md z-50' >
        <button onClick={ () => {setActivarSidebar(!activarSidebar)} }>
            <i className="bi bi-list transition-all duration-300 text-2xl px-2 text-white hover:cursor-pointer rounded-md hover:bg-indigo-800"></i>
        </button>
        <h1 className='font-bold text-2xl text-white'>FinanceApp</h1>
    </div>
    </>
  )
}

export default Topbar
