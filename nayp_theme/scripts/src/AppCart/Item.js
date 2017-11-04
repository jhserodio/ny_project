import React from 'react';

const Item = props => (
  <li>
    <div className="preview_item">
      <div className="_image">
        <img alt={props.title} src={props.img} />
      </div>
      <div className="_content">
        <div className="_info">
          <p>{props.title}</p>

          <p>
            <span>color default / size default</span>
          </p>
          <p>{props.price}</p>
        </div>

        <div className="calc-amount">
          <button
            className="btn-icon"
            onClick={() => props.changeCount(props.quantity - 1)}>
            -
          </button>
          <input type="text" value={props.quantity} />
          <button
            className="btn-icon"
            onClick={() => props.changeCount(props.quantity + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  </li>
);

export default Item;
