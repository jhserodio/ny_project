import { postProductAdd, postProductUpdate } from '../endpoints/product';
import { onSetCartPreview } from './app';

function onSetProduct(product, error = null) {
  return {
    type: 'SET_PRODUCT',
    payload: product,
    error,
  };
}

export const setProduct = product => dispatch => {
  postProductAdd(product).then(resp => {
    onSetProduct(resp.data);
  });
};

export const setProductCount = product => dispatch => {
  postProductUpdate(product).then(resp => {
    dispatch(onSetCartPreview(resp.data));
  });
};
