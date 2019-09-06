import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CartDropDown = () => (
  <div className='cart-dropdown'>
    <div className='cart-icons'>
      <div>ITEM</div>
      <div>ITEM</div>
      <div>ITEM</div>
      <div>ITEM</div>
      <div>ITEM</div>
      <div>ITEM</div>
      <div>ITEM</div>
    </div>
    <CustomButton> GO TO CHECKOUT </CustomButton>
  </div>
);

export default CartDropDown;
