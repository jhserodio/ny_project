// TOGGLE ELEMENTS

import * as header from './components/header'
import * as footer from './components/footer'
import { cartPreview } from './components/cartPreview'
import { toggleDisplay } from './utils/toggleElements'

import * as productGallery from './components/productGallery';

// declaração carrinho
cartPreview();
toggleDisplay('active-product-social');
