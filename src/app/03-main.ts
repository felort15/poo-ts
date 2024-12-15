import { ProductHttpService } from "./service/product-http.service";
import { apiUrl } from "./service/base-http.service";

(async () => {
  const productService = new ProductHttpService(`${apiUrl}/products`);

  console.log('---'.repeat(10));

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map((item =>item.price) ));

  console.log('---'.repeat(10));

  const productId = products[0].id;
  await productService.update(productId, {
    price: 10000,
    description: 'New description',
  });

  console.log('---'.repeat(10));

  const product = await productService.findOne(productId);
  console.log(product);
})();
