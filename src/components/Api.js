import React from 'react'

const Api = (props) => {


  return (
    <div>Api</div>
  )
}

export default Api




export async function fetchCompletion(props) {
    const OPENAI_API_KEY = "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";
    const url = 'https://api.openai.com/v1/chat/completions';
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    };
  
    const body = JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': props.messages,
      'temperature': 0.7
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

