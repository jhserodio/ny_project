import initialState from '../states/app';

const app = (state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case 'SET_CART_VISIBLE':
      return {
        ...state,
        cart: {
          ...state.cart,
          visible: payload,
        },
      };
    case 'SET_CART_PREVIEW':
      return {
        ...state,
        cart: {
          ...state.cart,
          ...payload,
        },
      };
    default:
      return state;
  }
};

export default app;
