import React, { useState } from 'react';
import './ForgetPassForm.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { Url } from '../../utils/Url';
import { postApiWithoutAuth } from '../../utils/api';
import { Navigate } from 'react-router-dom';

function ForgetPassForm() {

  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    is_mobile_user: true,
  });

  const handleChange = async (e) => {
    e.preventDefault();

    try {
     
      const response = await postApiWithoutAuth(Url.FORGETPASSWORD_URL, formData);

      if (response.data) {
        alert('Password reset request sent successfully!');
        console.log(response.data);
        setFormData({
          email: '',
          is_mobile_user: true, 
        });
        navigate("/create-password");
       

      } else {
        console.log('Error:', response.data);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    const newValue = name === 'is_mobile_user' ? value === 'true' : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <div className='bg-image3'>
      <div>
        <div className="image-text3">
          <img className='img3' src="Vectorblue.svg" alt="Image" />
          <p className='text-1'>Ginzzel</p>
        </div>
      </div>

      <div>
        <form onSubmit={handleChange}>
          <div className="custom-form3">
            <h1>Forget Password?</h1>
            <p className='forget-paragraph'>Enter the email associated with your account, and we’ll send an email with instructions to reset your password</p>
         
            <input
              className="input3"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label className="input-label">
              Is mobile user:
              <select  
                name="is_mobile_user"
                value={formData.is_mobile_user.toString()} 
                onChange={handleInputChange}
                
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
         
            <button className="button3" type='submit'>Submit</button>

            <Link to="/login" className='back-to-login'>BACK TO LOGIN</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassForm;
