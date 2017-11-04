import { connect } from 'react-redux';
import React, { Component } from 'react';

import { setCartVisible } from '../store/actions/app';
import { setProductCount } from '../store/actions/product';
import Cart from './Cart';

class CartContainer extends Component {
  render() {
    return (
      <Cart
        close={this.props.setCartVisible}
        active={this.props.visible}
        listItem={this.props.items}
        quantity={this.props.itemCount}
        total={this.props.totalPrice}
        subtotal={this.props.originalTotalPrice}
        shipping={this.props.shipping}
        changeProductCount={this.props.setProductCount}
      />
    );
  }
}

const mapStateToProps = state => ({
  visible: state.app.cart.visible,
  items: state.app.cart.items,
  itemCount: state.app.cart.item_count,
  totalPrice: state.app.cart.total_price,
  originalTotalPrice: state.app.cart.original_total_price,
  shipping: state.app.cart.shipping,
});

const mapDispatchToProps = dispatch => ({
  setCartVisible: () => {
    dispatch(setCartVisible());
  },
  setProductCount: product => {
    dispatch(setProductCount(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
