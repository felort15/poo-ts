import { faker } from '@faker-js/faker';

import { Product } from './product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export class ProductMemory {
  private products: Product[] = [];

  created (data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.number.int(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
      },
      images: [],
    };
    this.products.push(newProduct);
    return newProduct;
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  updateProduct(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex(item => item.id === id);
    this.products[index] = {
      ...this.products[index],
      ...changes,
    };
    return this.products[index];
  }
  findOne(id: Product['id']) {
    return this.products.find(item => item.id === id);
  }
}
