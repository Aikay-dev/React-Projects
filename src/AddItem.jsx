import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addform' onSubmit = {handleSubmit}>
          <label htmlFor = "addItem" className = "addlabel">Add Item</label>
          <input 
          autoFocus
          ref={inputRef}
          id = "addItem"
          placeholder= "Add Item"
          required
          type="text" 
          value ={newItem}
          onChange = {(e) => setNewItem(e.target.value)}
          
          />
        <button
        type = "submit"
        aria-label = "Add Item"
        className = "addbutt"
        onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>

    </form>
  )
}

export default AddItem