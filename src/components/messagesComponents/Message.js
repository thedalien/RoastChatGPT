import React from 'react'
import './Messages.css'

const Message = (props) => {
    let messageClass = props.role === "user" ? 'right-message' : 'left-message';
    messageClass += props.className ? ` ${props.className}` : '';
  
    return (
      <div className={messageClass}>{props.content}</div>
    )
}
  

export default Message