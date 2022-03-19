
import {useState, useEffect} from 'react'
const BasicForm = (props) => {

const [UserName, setUserName]= useState('')
const [LastName, setLastName]=useState('')
const [EmailAdress, setEmailAdress]=useState('')
const [BoxTouched, setBoxTouched]= useState(false)


const IsEnteredNameValid= UserName.trim()!=='';
const IsNameInValid= !IsEnteredNameValid && BoxTouched;

const IsEnteredLastNameValid=LastName.trim()!=='';
const IsLastNameInValid= !IsEnteredLastNameValid && BoxTouched;

const IsEnteredMailValid = EmailAdress.trim()!=='' && EmailAdress.includes('@');
const IsMailInvalid = !IsEnteredMailValid && BoxTouched

let FormValid= false;

if(IsEnteredNameValid && IsEnteredLastNameValid && IsEnteredMailValid)
  FormValid=true;
else
  FormValid=false;

  const onChangeHandler=(event)=>{

    setUserName(event.target.value);
    
    }

    const onChange2Handler=(event)=>{
      setLastName(event.target.value)
    }

    const onChange3Handler=(event)=>{
      setEmailAdress(event.target.value);
    }
   const onBlurHandler=(event)=>{

      setBoxTouched(true)

    }

 const onSubmitHandler=(event)=>{

    event.preventDefault();

    console.log(UserName);
    console.log(LastName)
    console.log(EmailAdress)
setBoxTouched(true)
    if(!IsEnteredNameValid || !IsEnteredLastNameValid || !IsEnteredMailValid)
    { 
      return;

    }
   setUserName('');
   setLastName('');
   setEmailAdress('')
   setBoxTouched(false)

  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name' 
          >First Name</label>
          <input type='text' id='name'
           onChange={onChangeHandler}
           value={UserName} 
           onBlur={onBlurHandler}
           />
         
              {IsNameInValid ? <p>Enter valid name</p>: ''}  
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' 
           onChange={onChange2Handler}
           value={LastName} 
           onBlur={onBlurHandler}
          />
          {IsLastNameInValid ? <p>Enter valid last name</p>: ''}  
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' 
         onChange={onChange3Handler}
         value={EmailAdress} 
         onBlur={onBlurHandler}
        />
        {IsMailInvalid ? <p>Enter valid Email</p>: ''} 
      </div>
      <div className='form-actions'>
   <button disabled={!FormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
