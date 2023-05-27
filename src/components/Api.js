import React from 'react'

const Api = (props) => {


  return (
    <div>Api</div>
  )
}

export default Api




export async function fetchCompletion(props) {
    const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
    const url = 'https://api.openai.com/v1/chat/completions';
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    };
  
    const body = JSON.stringify({
      'model': 'gpt-4',
      // 'model': 'gpt-3.5-turbo',
      'messages': props.messages,
      'temperature': 1,
    });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
      });
  
      const data = await response.json();
      console.log(data);
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error:', error);
    }
  }

