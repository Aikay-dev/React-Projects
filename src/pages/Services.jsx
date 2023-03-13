import React from 'react'
import { useState } from 'react'
import ColorInput from '../Components/ColorInput'
import Colorbox from '../Components/Colorbox'

const Services = () => {
  const [box, status] = useState('Empty Value')
  const changeValue = (color) => {
    status(color)
  }

  return (
    <>
    <Colorbox box = { box } />
    <ColorInput changeValue = {changeValue}/>
    </>
  )
}

export default Services