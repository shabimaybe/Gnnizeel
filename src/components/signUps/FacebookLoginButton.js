import React from 'react';
import FacebookLogin from 'react-facebook-login';


const FacebookLoginButton = ({ onSuccess, onFailure }) => {

   
  return (
    <FacebookLogin
      appId="356326006919934"
      autoLoad={false}
      fields="name,email,picture"
      callback={onSuccess}
    />
  );
};

export default FacebookLoginButton;
