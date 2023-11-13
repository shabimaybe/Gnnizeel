import React, { useState } from 'react';
import './CreateNewPassForm.css'; 
import { Link } from 'react-router-dom';
import { Url } from '../../utils/Url';
import { postApiWithoutAuth } from '../../utils/api';


function CreateNewPassForm() {
  const [formData, setFormData] = useState({
    password: '',
    confirm_password: '',
    code: '', 
  });

  const handleChange = async (e) => {
    e.preventDefault();
    
    try {
      
      const response = await postApiWithoutAuth(Url.RESETPASSWORD_URL, formData);

      if (response.data) {
        alert('Password updated successfully!');
        console.log(response.data);

        
        setFormData({
          password: '',
          confirm_password: '',
          code: '',
        });
      } else {
        console.log('Error:', response.data);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='bg-image4'>
      <div>
        <div className="image-text4">
          <img className='img4' src="Vectorblue.svg" alt="Image" />
          <p className='text-4'>Ginzzel</p>
        </div>
      </div>

      <div>
        <form onSubmit={handleChange}>
          <div className="custom-form4">
            <h1>Create New Password</h1>
            <p className='forget-paragraph 4'>
              Your new password must be different from the previously used password
            </p>

            <input
              className="input2"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              className="input2"
              type="password"
              name="confirm_password"
              placeholder="Enter Confirm Password"
              value={formData.confirm_password}
              onChange={handleInputChange}
            />
            <input
              className="input2"
              type="text"
              name="code"
              placeholder="Enter Code"
              value={formData.code}
              onChange={handleInputChange}
            />

            <button className="button4" type='submit'>Update Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewPassForm;
