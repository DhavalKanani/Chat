import React, { useEffect, useContext, useState } from 'react'
import './Input.css'
import { massagesContext } from '../Chat/Chat';






function Input() {
  const {name,setMessage,MessagesDispatch,sendMessage,message} = useContext(massagesContext)
  const [temp, setTemp] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!temp) return;
    //var mmsg = {type:'add',data:{ id:new Date().getTime(),text:temp,user:name }};
   setMessage({data:{id:new Date().getTime(),text:temp,user:name}});
   // console.log(message.data);
  // console.log(mmsg)
  
   sendMessage({id:new Date().getTime(),text:temp,user:name});
    
    setTemp('');
    
    
  }


    return (
        <form className="form" onSubmit={handleSubmit}>
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={temp}
      onChange={({ target: { value } }) => setTemp(value)}
     
    />
    <button className="sendButton" type="submit">Send</button>
  </form>
    )

}
export default Input;
