import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_bWV4eYuqE5YuZTt41qqkp1pk';

  const onToken = token => {
    console.log(token);
    toast.success('Payment Successful!');
  }
  
  return (
    <StripeCheckout 
      label='Pay Now' 
      name='CRWN Clothing Ltd.' 
      billingAddress 
      shippingAddress 
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken} 
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;