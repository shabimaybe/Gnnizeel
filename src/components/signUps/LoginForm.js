import React, { useEffect, useState } from 'react';
import './LoginForm.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios'; 
import { Url } from '../../utils/Url';
import { postApiWithoutAuth } from '../../utils/api';
import { setToken } from '../../utils/LocalStorage';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';
import {gapi} from "gapi-script";


function LoginForm() {
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '',
  });

  const handleChange = async (e) => {
    e.preventDefault();

    try {
      const response = await postApiWithoutAuth(Url.LOGIN_URL, formData); 
      setToken(response.data.acces_token)
      if (response.data) {
        alert('Login was successful!'); 
        console.log(response.data);

        setFormData({
          email: '',
          password: '',
          role: '',
        });
       navigate("/")
        
      } else {
        console.log('Login failed:', response.data); 
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

 useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId:"43835889126-e9at3boi16l09v22oelj1dlpumuejqgv.apps.googleusercontent.com",
      scope:""
    })
  };
  gapi.load("client",start)
 });
  
 
 
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const googleLoginSuccess = (response) => {
    console.log(response); 

  };

 

  const facebookLoginSuccess = (response) => {
    console.log(response); 
  };



  return (
    <>
      <div className="main-div">
        <div className="container">
          <div className="content">
            <div className="image-text1">
              <img src="Vector.svg" alt="Image" />
              <p className='g-1'>Ginzzel</p>
            </div>
            <div className="buttons">
              <button className="button">Language</button>
              <button className="button">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="first-div">
          <h1>Consult a Dental any time, anywhere by joining us</h1>
          <p>
            Find new patients and get your old customers to visit you more often. Post a deal and post last-minute appointments in an easy way.
          </p>
          <button className="button">Get Started</button>
        </div>
        <div className="second-div">
          <h2>Welcome to Ginzzel</h2>
          <h3>Login</h3>
          <form onSubmit={handleChange}>
            <input
              type="text"
              name="email"
              placeholder="Enter email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="role"
              placeholder="Enter role"
              value={formData.role}
              onChange={handleInputChange}
            />
            <Link to='/forget'>Forget Password</Link>
            <button className="button" type="submit">Submit</button>
          </form>
          <Link to='/signup' className="last-p">Create New Account</Link>

          <div className='button-log'>
            <GoogleLoginButton onSuccess={googleLoginSuccess} />
            <FacebookLoginButton onSuccess={facebookLoginSuccess} />
          </div>


        </div>
      </div>
    </>
  );
}

export default LoginForm;
