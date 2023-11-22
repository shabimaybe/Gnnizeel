import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/components/redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GoogleOAuthProvider clientId='43835889126-e9at3boi16l09v22oelj1dlpumuejqgv.apps.googleusercontent.com'>
  
  <Provider store={store}>
    <BrowserRouter>
     
        <App />
      
    </BrowserRouter>
  </Provider>
  </GoogleOAuthProvider>

  </>

  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
