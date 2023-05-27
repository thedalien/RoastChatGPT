import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MessagesBody from './messagesComponents/MessagesBody';

export default function AppBody() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { "role": "system", "content": "You are an AI chatbot that writes humorous roasts. User will provide you with a name, and you will create a light-hearted, humorous roast in response. Remember, these roasts should be fun, playful, and respectful, maintaining a friendly tone throughout. The replies should only be roasts based on the information I provide and nothing else. There's no need for any explanations in your responses." },
    { "role": "assistant", "content": "Hi, what's your name?" },
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
      <div className="text-field">
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
    </div>
  )
}
