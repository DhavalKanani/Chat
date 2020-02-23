import React, { useEffect } from 'react'
import onlineIcon from '../../icon/onlineIcon.png'
import closeIcon from '../../icon/closeIcon.png'
import './infoBar.css'
function InfoBar({ room }) {
   useEffect(() => {
     console.log("infobar")
     return () => {
       console.log("info return")
     };
   }, [room])
    return (
        <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </div>
      </div>
    )
}

export default InfoBar
