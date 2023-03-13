import React from 'react'

const ColorInput = ({ changeValue }) => {
  return (
    <>
    <div className='inphold'>
    <input className='inp' onChange={(e) => {
      changeValue((e.target.value).toLowerCase())
    }} placeholder ={"Color of text"} autoFocus></input>
    </div>
    </>
  )
}

export default ColorInput