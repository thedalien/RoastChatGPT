import React, { useEffect } from 'react'
import Message from './Message'
import './Messages.css'
import { fetchCompletion } from '../Api'


function MessagesBody({ messages, setMessages }) {

  useEffect(() => {
    const fetchData = async () => {
      if (messages.length > 0 && messages[messages.length - 1].role === 'user') {
        const answer = await fetchCompletion({ messages });
        setMessages(prev => [...prev, { "role": "assistant", "content": answer }]);
      }
    };
    fetchData();
  }, [messages, setMessages]); 

  const displayMessages = messages.map((message, index) => {
    return ( <Message key={index} role={message.role} content={message.content} /> )
  });

  return (
    <div className='chat-container'>
      {displayMessages}
    </div>
  )
}

export default MessagesBody
