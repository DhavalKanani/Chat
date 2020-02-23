import React, { useEffect, useState, useReducer } from 'react';
import queryString from 'query-string'
import io  from 'socket.io-client'
import InfoBar from '../infoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../messages/Messages'
import './Chat.css'

let socket;


export const msg = React.createContext({});
export const massagesContext = React.createContext({});
let id=0;
function Chat({location}) {

  const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('')
    const [messages, MessagesDispatch] =useReducer((state,action)=>{  
     console.log(action)
console.log("called")

      switch (action.type) {
        case 'add':
         return[...state,action.data]
        default:
          return state;
      }
    
    },[]);
    const [temp,setTemp] = useState('');
     const ENDPOINT = 'https://funchatapp.herokuapp.com/';

     useEffect(() => {
        const {name,room} = queryString.parse(location.search);
        socket=io(ENDPOINT);
        setRoom(room);
        setName(name);

        socket.emit('join',{name,room},() => {
         
          console.log("joined")
        })
        socket.on('WlcMessage', (message) => {
          console.log("welcome message")
          const {data} =  message;
        MessagesDispatch({type:'add',data})
         console.log(message)
        });

       
    
            }, [ENDPOINT,location.search])


            useEffect(() => {
              console.log("msg socket.on")
           
              socket.on('Msg', (message) => {
                console.log(message)
              console.log("msg socket.on inside")
              const {data} =  message;
              console.log(data.user)
                console.log(data)
                console.log('socket.on ')
                MessagesDispatch({type:'add',data});
               
              })
              return () => {
                socket.emit('disconnect');
          
                socket.off();
              }
            }, [messages])

     

           

     const sendMessage =message=>{

      
     
      if(message){
        socket.emit('sendMessage',message,()=>setMessage(''))
      }
     
    }
   

    return (
      <div className="outerContainer">
        <div className="container">
         <InfoBar room={room.toString()}/>
         {console.log(messages)}
         <msg.Provider value={{messages,name}}>
         <Messages/>
         </msg.Provider>
         <massagesContext.Provider value={{name,setMessage,MessagesDispatch,sendMessage,message}}>
         <Input/>
         </massagesContext.Provider>
      </div>
      </div>
    )
}

export default Chat
