import { mount as ProductMount } from 'products/ProductsIndex';
import { mount as PdpMount } from 'pdp/PdpIndex';
import { mount as CartMount } from  'cart/CartIndex';

ProductMount(document.getElementById("root-products"));
PdpMount(document.getElementById("root-pdp"));
CartMount(document.getElementById("root-cart"));