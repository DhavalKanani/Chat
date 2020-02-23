import React, { useContext } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import './Messages.css'
import '../message/Message.css'

import { ReactEmoji } from 'react-emoji';
import { massagesContext, msg } from '../Chat/Chat';



function Messages() {
  let id=0;
  const {messages ,name} = useContext(msg)
console.log(name)
  const trimmedName =name.trim().toLowerCase();
 const spanStyle={color:'gray'}
 const sty = { textAlign : 'right'}
     console.log(messages + " in messdad")
       
  return (
    <ScrollToBottom className="messages">
     {messages.map((message) =>{ return (trimmedName==message.user)?<div style={sty} key={message.id}><p>{message.text}</p></div>:<div className="justifyStart" key={message.id}><p>{message.text}<span style={spanStyle}>{message.user}</span></p></div>})}
     </ScrollToBottom>
  )
}

export default Messages


// function messages() {

  

// const user=''

//     let isSentByCurrentUser = false;


// const trimmedName =name.trim().toLowerCase();

// if(user === trimmedName) 
//   isSentByCurrentUser = true;


//     return (
//         <ScrollToBottom className="messages">
//           {
//         messages.map((message) => {
//          if(isSentByCurrentUser)
//             return(
//               <div className="messageContainer justifyEnd" key={message.id}>
//                 <p className="sentText pr-10" >{trimmedName}</p>
//                 <div className="messageBox backgroundBlue">
//                   <p className="messageText colorWhite">{ReactEmoji.emojify(message.text)}</p>
//                 </div>
//               </div>
//               )
//               else
//               return (
//                 <div className="messageContainer justifyStart" key={message.id}>
//                   <div className="messageBox backgroundLight">
//                     <p className="messageText colorDark">{ReactEmoji.emojify(message.text)}</p>
//                   </div>
//                   <p className="sentText pl-10 ">{message.user}</p>
//                 </div>
//               )
//         })
//         }
//         </ScrollToBottom>
//     )
// }

//export default messages

