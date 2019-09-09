import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';

class Header extends React.PureComponent {
  onCartClick = () => {
    const { showDropdown } = this.state;
    this.setState({ showDropdown: !showDropdown });
  };

  render() {
    const { currentUser, hidden } = this.props;
    return (
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/shop'>
            CONTACT
          </Link>
          {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )}
          <CartIcon onClick={this.onCartClick} />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
