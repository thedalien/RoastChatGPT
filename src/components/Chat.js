import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'auto', p: 2 }}>
      {messages.map((message, i) => (
        <Typography key={i} sx={{ mb: 2 }}>
          {message}
        </Typography>
      ))}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          py: 2,
        }}
      >
        <TextField
          color="secondary"
          fullWidth
          variant="outlined"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
      </Box>
    </Box>
  );
};

export default Chat;
