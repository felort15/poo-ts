import axios from 'axios';
import { Product } from './product.model';


let anyVar: any = 12;
let boolVar: boolean = anyVar;



(async function getPoducs() {
  const getProducts = async () => {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    const products = rta.data;
    return products;
  };

  const products = await getProducts();
  console.log(products.map((item: Product) => `${item.title} - ${item.price}`));
})();

