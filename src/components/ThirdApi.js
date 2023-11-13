import React, { useState } from 'react';
import axios from 'axios';

function ThirdApi() {
  const [postData, setPostData] = useState({ title: '', body: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });


  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);
        console.log('POST Request Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
    
    setPostData({
        title: '', body: ''
    
    })
};

return (
    <div>
      <h2>POST Request Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={postData.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ThirdApi;
