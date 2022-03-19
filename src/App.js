import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [name, setName]= useState('');
const [list, setList] = useState([]);
const [alert, setAlert]= useState({show : false, type : '', msg : ''})
const[id, setID]= useState(null)
const[editing, isEditing]= useState(false)

  const onSubmitHandler = (event) =>{
event.preventDefault();
console.log(name);
if(!name){
//alert
}
else if(name && editing){

  setList(list.map((item)=>{

    if(item.id === id)
    return {item, name: name}

    return item
  }))

  setName('');
  isEditing(false);
  setID(null);
}
else
{

    const newItem = { id: Math.random(), name}
   //setList([...list, newItem])
  setList((prevList)=>( [...prevList, newItem] ))
  //  console.log('listItem:', list);
    setName('')
   
  }
}
  const removeItem = (id) =>{

    console.log('removeItem function ', id)
  const removedData =  list.filter((item)=>(id!==item.id))
    setList(removedData);
   // setList((prevList)=>( [...prevList,   list.filter((item)=>(id!==item.id))] ))
   console.log( 'name remaining in list', removedData)
  }

  const onEditHandler = (id)=>{

   const specItem = list.find((item)=>(item.id === id))
   console.log(list.find((item)=>(item.id === id)))
   setName(specItem.name);
    setID(id);
    isEditing(true)

   
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  return (
<section className='section-center'>

  <form className='grocery-form' onSubmit= {onSubmitHandler} >
  

  <h3>grocery bud</h3>
  <div className='form-control'>
    <input
      type='text'
      className='grocery'
      placeholder='e.g. eggs'
      value = {name}
      onChange= {(e)=>{setName(e.target.value)}}
    />
    <button type='submit' className='submit-btn'>
  submit
    </button>
  </div>
</form>
<div className= 'grocery-container'>
{
  list.length> 0 && <List items= {list} removeItem = {removeItem} onEditHandler = {onEditHandler}/>
}
</div>
</section>
  )
}

export default App
