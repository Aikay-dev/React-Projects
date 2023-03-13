import React from 'react'

const Colorbox = ({ box }) => {
  let color
  box === "black" ? color = "white" : color  = "black"
  return (
    <>
    <div className="serviceblock" style={{backgroundColor : box, color: color}}>
      <p className='coldisp'>{ box }</p>
    </div>
    </>
  )
}

export default Colorbox