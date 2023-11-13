import React, { useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [token, setToken] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    try {
      const { token, error } = await stripe.createToken(elements.getElement(CardNumberElement,CardExpiryElement,CardCvcElement));
      if(error){
        console.log(error);
      }else{

        setToken(token.card.exp_year)
        console.log(token);
      }
    } catch (error) {
      
    }
   
  };

  return (
    <>
      <h3>Test stripe</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Card number
          <CardNumberElement />
        </label>
        <label>
          Expiry date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCvcElement />
        </label>
        

       
        <button type="submit">
          Submit
        </button>

        <div>
          Here is exp_year: {token}
        </div>


      </form>
    </>
  );
};

export default CheckoutForm;
