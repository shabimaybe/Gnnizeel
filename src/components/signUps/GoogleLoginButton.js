import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="43835889126-e9at3boi16l09v22oelj1dlpumuejqgv.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      redirectUri="https://7a6d-139-135-36-231.ngrok-free.app/"
      scope='https://mail.google.com/'

    />
  );
};

export default GoogleLoginButton;

