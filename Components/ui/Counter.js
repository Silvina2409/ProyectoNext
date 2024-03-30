"use client"
import React from 'react'

import Boton from './Boton'

const Counter = ({counter, setCounter, max}) => {
    const increase = () => counter < max && setCounter(counter +1)
    const decrease = () => counter > 1 && setCounter  (counter -1)
    
  return (
    <div className='flex justify-center item-center gap-3'>
        <Boton onClick={decrease} className='active:bg-yellow-50'> - </Boton>
        <p className='text-xl'> {counter} </p>
        <Boton onClick={increase} className='active:bg-yellow-50'> + </Boton>




    </div>
  )
}

export default Counter