import { ProductMemoryService } from "../service/product-memory";

const productService = new ProductMemoryService();

const product1 = productService.create({
  title: 'Product 1',
  price: 100,
  description: 'bla bla',
  categoryId: 12,
  images: []
});


const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'cambiar nombre',
  price: 200,
});

const rta=productService.findOne(productId);
console.log(rta);

//const product2 = productService.update(product1.id, {
  //title: 'Product 2',
  //price: 200,
//});

console.log(productId);

