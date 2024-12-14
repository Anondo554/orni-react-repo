import React from 'react'
import Image from './Image'
import Vrror from '../assets/error.gif'

const Error = () => {
  return (
    <Image imgSrc={Vrror} className={"w-full"}/>
  )
}

export default Error