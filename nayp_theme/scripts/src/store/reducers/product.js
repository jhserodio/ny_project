import initialState from '../states/product';

const app = (state = initialState, action) => {
  const { type, payload, index, error } = action;

  switch (type) {
    case 'SET_PRODUCT':
      return payload;
    default:
      return state;
  }
};

export default app;
