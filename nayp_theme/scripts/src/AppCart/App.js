import React from 'react';
import Item from './Item';

const App = props => (
  <div className="preview-seller">
    <div className="flag">
      <p className="title-small">cart / 03</p>
      <button className="btn-icon" id="close-preview-cart">
        x
      </button>
    </div>

    <ul className="preview-list">
      {props.listItem.map(item => (
        <Item
          img={item.image}
          title={item.product_title}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </ul>

    <div className="preview-result">
      <button className="btn" id="active-ship">
        calculate shipping
      </button>

      <p>
        <span>subtotal</span>
        <span>{props.totalPrice}</span>
      </p>
      <p>
        <small>
          <i>(excluding shipping)</i>
        </small>
        <small>R$ 00,00</small>
      </p>
      <p>
        <strong>TOTAL</strong>
        <strong>{props.totalPrice}</strong>
      </p>
      <button className="btn-large">checkout</button>
    </div>
  </div>
);

export default App;
