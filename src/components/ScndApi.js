import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ScndApi() {
  const [todo, setTodo] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5e0acd79b8ad4c4b938c5bf974f307e5');
      setTodo(response.data.articles);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px',
    display:'grid',gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
      {todo.map((element) => (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }} key={element.url}>
          <img src={element.urlToImage} alt='new-image' style={{maxHeight:'300px', maxWidth:'400px'}}/>
            <p style={{ color: '#888' }}>ID: {element.description}</p>
          <h2 style={{ fontSize: '1.5rem' }}>{element.title}</h2>
          <p>{element.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ScndApi;
