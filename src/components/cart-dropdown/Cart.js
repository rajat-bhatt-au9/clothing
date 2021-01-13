import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './cart.scss';

const Cart = () =>(
    <div className='cart-dropdown'>
        <div className='cart-items' />

        <CustomButton> Go To Chcekout</CustomButton>
    </div>
);

export default Cart;