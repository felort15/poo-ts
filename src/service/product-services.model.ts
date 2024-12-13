import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto"

import { Product } from "../app/product.model";

export interface ProductService {
  getAll(): Promise<Product[]> | Product[];
  update(id: Product['id'],changes: UpdateProductDto | CreateProductDto): Promise<Product[]> | Product[];
  create(dto: CreateProductDto): Promise<Product[]> | Product[];
  findOne(id: Product['id']): Promise<Product | undefined> | Product | undefined;
}

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  update(id: Product['id'], changes: UpdateProductDto | CreateProductDto): Product[] {
    const index = this.products.findIndex(item => item.id === id);
    this.products[index] = {
      ...this.products[index],
      ...changes
    };
    return this.products;
  }

  create(dto: CreateProductDto): Product[] {
    const newProduct = {
      ...dto,
      id: faker.number.int(),
      category: {
        id: dto.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
      }
    };
    this.products.push(newProduct);
    return this.products;
  }

  findOne(id: Product['id']): Product | undefined {
    return this.products.find(item => item.id === id);
  }
}
