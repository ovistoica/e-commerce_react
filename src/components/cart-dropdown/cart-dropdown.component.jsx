import React from 'react';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

class CartDropDown extends React.Component {
  onCheckoutButtonClick = () => {
    const { history, dispatch } = this.props;
    dispatch(toggleCartHidden());
    history.push('/checkout');
  };

  render() {
    const { cartItems } = this.props;
    return (
      <div className='cart-dropdown'>
        <div className='cart-icons'>
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <CustomButton onClick={this.onCheckoutButtonClick}>
          GO TO CHECKOUT
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
