import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function StripeForm() {
const onToken =(token)=>{
    console.log(token);

}

    return (
        <div>

            <StripeCheckout
                token={onToken}
                
                stripeKey="pk_test_qblFNYngBkEdjEZ16jxxoWSM"
            />
        </div>
    )
}

export default StripeForm