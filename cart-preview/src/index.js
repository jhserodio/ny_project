import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const list = [
  {
    image: "https://cdn.shopify.com/s/files/1/2004/6575/products/cat-11_823ff962-f1cd-4980-9d74-41c110096e38.jpg?v=1502930709",
    price: 0,
    product_title: "Copy of Copy of Gola polo",
    quantity: 1,
    variant_id: 37173821963
  },
  {
    image: "https://cdn.shopify.com/s/files/1/2004/6575/products/cat-11_823ff962-f1cd-4980-9d74-41c110096e38.jpg?v=1502930709",
    price: 0,
    product_title: "Carambolas",
    quantity: 1,
    variant_id: 37173821963
  },
  {
    image: "https://cdn.shopify.com/s/files/1/2004/6575/products/cat-11_823ff962-f1cd-4980-9d74-41c110096e38.jpg?v=1502930709",
    price: 0,
    product_title: "quadradonas",
    quantity: 1,
    variant_id: 37173821963
  }
];

ReactDOM.render(
  <App totalPrice={4321.00} listItem={list} />,
  document.getElementById('ny-cart-preview-seller'));
