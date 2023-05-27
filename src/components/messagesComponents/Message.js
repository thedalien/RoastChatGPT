import React from 'react'
import './Messages.css'

const Message = (props) => {

  return (
    <div className={props.role==="user" ? 'right-message' : 'left-message'}>{props.content}</div>
  )
}

export default Message