import { getCartPreview } from '../endpoints/cart';

export function onSetCartVisible(visible, error = null) {
  return {
    type: 'SET_CART_VISIBLE',
    payload: visible,
    error,
  };
}

export function onSetCartPreview(cart, error = null) {
  return {
    type: 'SET_CART_PREVIEW',
    payload: cart,
    error,
  };
}

export const setCartVisible = () => (dispatch, getState) => {
  const state = getState();
  const { visible } = state.app.cart;

  dispatch(onSetCartVisible(!visible));

  if (!visible) {
    dispatch(setCartPreview());
  }
};

export const setCartPreview = () => dispatch => {
  getCartPreview().then(resp => {
    dispatch(onSetCartPreview(resp.data));
  });
};
