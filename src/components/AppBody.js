import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MessagesBody from './messagesComponents/MessagesBody';

export default function AppBody() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { "role": "user", "content": "Who won the world series in 2020?" },
    { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
  ]);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      const newMessage = {content: input, role: "user"};
      setMessages(prev => [...prev, newMessage]);
      setInput('');
      event.preventDefault(); 
    }
  }
  
  const handleChange = (event) => {
    setInput(event.target.value);
  }

  return (
    <div className="App-body">
      <MessagesBody messages={messages} setMessages={setMessages} />
      <TextField
        fullWidth
        multiline
        label="Enter your prompt"
        id="textField"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
