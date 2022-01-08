import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
export default function App() {
  return (
    <div>
      <MyComponent/>
      <InputandChat/>
    </div>
    
    
  );
}

function MyComponent () {
  return (
    <div className='d-flex justify-content-start align-item-end bg-dark'>
      <h1 className='navingredients'>MyChatApp</h1>
      <p className='navingredients'>Mayur Patankar</p>
      <p className='navingredients'>Id : </p>
    </div>
  );
}


function InputandChat () 
{
  const Button = "Button";
  const [message, setMessage] = useState("");
  const messageData = (e) => {
    setMessage(e.target.value);
  };
  const [list, setList] = useState([]);
  
  //onclick copy input to list
  const addMessagetoList = () => {
    if(message=="")
    {alert("EmptyMessage");
      return;}
    else
    {
      const newlist = [...list, message];
      setList(newlist);
      console.log(message);
      setMessage("");
    }
  }
  //if list element is od align left
  //if list element is even align right
  return(
    <div>
      <div className='row'>
        <div className='col-lg-2'></div>
        <div className='col-lg-4'><input type='text' className='input' value={message} placeholder='Put Your Message Here ... !!' onChange={messageData}/></div>
        <div className='col-lg-1'></div>
        <div className='col-lg-3'><input type='button' className='button' value={Button} onClick={addMessagetoList}/></div>
      </div>
    <hr/>
       {list.map((item, index) => (
         <div>
         <h3 key={index}>
         {item}
         </h3>
         </div>
          
        ))
      }
    </div>
       
     
  );
}