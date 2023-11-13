 
import './App.css';
import DealForm from './components/createDeal/DealForm';
import Header from './components/header/Header';
import Main from './components/main/Main';
import {Routes,Route } from 'react-router-dom';
import LoginForm from './components/signUps/LoginForm';
import SignUpForm from './components/signUps/SignUpForm';
import ForgetPassForm from './components/signUps/ForgetPassForm';
import CreateNewPassForm from './components/signUps/CreateNewPassForm';
import ScndApi from './components/ScndApi';
import ThirdApi from './components/ThirdApi';
import PrivateRoute from './PrivateRoute';
import StripeForm from './components/stripe/StripeForm';
// import StripePay from './components/stripe/StripePay';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './components/payment/CheckoutForm';
import StripeContainer from './components/payment/StripeContainer';


function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={ 
          <PrivateRoute>
            <Main/>
          </PrivateRoute>
         }/>
         <Route path='/Header' element={<Header/>}/>
         <Route path="/DealForm" element={<DealForm/>}/>
         <Route path="/login" element={<LoginForm/>}/>
         <Route path="/signup" element={<SignUpForm/>} />
         <Route path="/forget" element={<ForgetPassForm/>}/>
         <Route path='/create-password' element={<CreateNewPassForm/>}/>
        

         <Route path="/scd-api" element={<ScndApi/>}/>
         <Route path="/scd-api1" element={<ThirdApi/>}/>
         <Route path="/stripe" element={<StripeForm/>}/>
         


         <Route path="/token1" element={<StripeContainer/>}/>
      </Routes>

    
    </>
  );
}

export default App;
