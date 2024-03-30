import React from 'react'

const Boton = ({children, className="", ...args }) => {
  return (
    <button className={`rounded-xl py-2 px-3 bg-yellow-50 text-center text-black ${className}`} {...args} >
        {children}
   </button>
  )
}

export default Boton