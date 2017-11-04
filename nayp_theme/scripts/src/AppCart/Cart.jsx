import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';

const Cart = props => (
  <div className={props.active ? 'cart-preview active' : 'cart-preview'}>
    <div className="preview-seller">
      <div className="flag">
        <p className="title-small">
          cart {props.quantity ? `/ ${props.quantity}` : null}
        </p>
        <button
          onClick={props.close}
          className="btn-icon"
          id="close-preview-cart">
          x
        </button>
      </div>

      {props.listItem && props.listItem.length ? (
        <ul className="preview-list">
          {props.listItem.map(item => (
            <Item
              img={item.image}
              title={item.product_title}
              quantity={item.quantity}
              price={item.price}
              id={item.id}
              key={item.id}
              changeCount={count =>
                props.changeProductCount({ id: item.id, quantity: count })}
            />
          ))}
        </ul>
      ) : null}

      <div className="preview-result">
        <button
          className="btn"
          id="active-ship"
          style={{
            display: 'none',
          }}>
          calculate shipping
        </button>

        <p>
          <span>subtotal</span>
          <span>R$ {props.subtotal ? props.subtotal : props.total}</span>
        </p>
        {props.shipping ? (
          <p>
            <small>
              <i>(excluding shipping)</i>
            </small>
            <small>R$ {props.shipping}</small>
          </p>
        ) : null}
        <p>
          <strong>TOTAL</strong>
          <strong>R$ {props.total}</strong>
        </p>
        <button className="btn-large">checkout</button>
      </div>
    </div>
  </div>
);

const ItemShape = PropTypes.shape({
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  product_title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  variant_id: PropTypes.number.isRequired,
});

Cart.propTypes = {
  listItem: PropTypes.arrayOf(ItemShape).isRequired,
  active: PropTypes.bool.isRequired,
  changeProductCount: PropTypes.func.isRequired,
  total: PropTypes.number,
  shipping: PropTypes.number,
  subtotal: PropTypes.number,
};

Cart.defaultProps = {
  total: undefined,
  shipping: undefined,
  subtotal: undefined,
};

export default Cart;
