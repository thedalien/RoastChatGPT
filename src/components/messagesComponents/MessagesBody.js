import React, { useEffect, useState } from 'react'
import Message from './Message'
import './Messages.css'
import { fetchCompletion } from '../Api'


function MessagesBody({ messages, setMessages }) {
  const [fetchingData, setFetchingData] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      if (messages.length > 0 && messages[messages.length - 1].role === 'user') {
        setFetchingData(true);
        const answer = await fetchCompletion({ messages });
        setMessages(prev => [...prev, { "role": "assistant", "content": answer }]);
        setFetchingData(false);
      }
    };
    fetchData();
  }, [messages, setMessages]); 

  const displayMessages = messages.slice(1).map((message, index) => {
    const animationClass = fetchingData ? 'fetching-animation' : '';
    return ( <Message key={index} role={message.role} content={message.content} className={animationClass} /> )
  });
  
  

  return (
    <div className='chat-container'>
      {displayMessages}
    </div>
  )
}

export default MessagesBody
