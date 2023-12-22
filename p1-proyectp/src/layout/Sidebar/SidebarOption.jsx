import React from 'react'

const SidebarOption = ({children, icon}) => {
  return (
    <div className='flex flex-row items-center gap-4 text-white font-normal p-2 m-3 rounded-lg transition-all cursor-pointer hover:bg-indigo-800'>
        <i className={`bi bi-${icon} text-2xl text-white`}></i>
        <p>{children}</p>
    </div>
  )
}

export default SidebarOption
