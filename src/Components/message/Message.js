import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji';
import React from 'react'

function Message({message,current}) {
  
    if(current===message.name)
      return(
    <div className="messageContainer justifyEnd"  >
    <p className="sentText pr-10" >{message.name}</p>
    <div className="messageBox backgroundBlue" >
      <p className="messageText colorWhite" >{message.text}</p>
    </div> 
  </div>)
  else return(
  <div className="messageContainer justifyStart">
  <div className="messageBox backgroundLight">
    <p className="messageText colorDark">{message.text}</p>
  </div>
  <p className="sentText pl-10 ">{message.user}</p>
</div>)
    
  
}



export default Message
