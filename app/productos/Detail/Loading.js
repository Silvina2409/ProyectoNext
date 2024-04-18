import React from 'react'
import Image from 'next/image'
const Loading = () => {
  return (
    <div className='w-full h-full min-h-screen flex justify-center items-center'> 
    <Image
    src={"/logo.jpg"}   
    width = {150}
    height={150}
    alt= "logo furniture"
    className='animate-pulse m-auto'
    />
    <p>Espere...</p>
    
    </div>

  )
}

export default Loading