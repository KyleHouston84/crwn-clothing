import React from 'react';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, dispatch }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_bWV4eYuqE5YuZTt41qqkp1pk';

  const navigate = useNavigate();

  const onToken = token => {
    console.log(token);
    toast.success('Payment Successful!');
    dispatch(clearCart());
    navigate('/');
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

export default connect()(StripeCheckoutButton);