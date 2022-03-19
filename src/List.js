import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const List = (props) => {

// console.log('props.item', props.items)
  return (
    <div className='grocery-list'>
    {props.items.map((item)=>{
  
     const {id , name} = item;
      return(
      
    <article className='grocery-item' key={id}>
    <p className='title'>{name}</p>
    <div className='btn-container'>
      <button
        type='button'
        className='edit-btn'
        onClick =  {()=> props.onEditHandler(id) } 
      >
        <FaEdit />
      </button>
      <button
        type='button'
        className='delete-btn'
       onClick =  {()=> props.removeItem(id) } >
        <FaTrash />
      </button>
    </div>
  </article>
      )
})}
</div>
  );
  
}

export default List
