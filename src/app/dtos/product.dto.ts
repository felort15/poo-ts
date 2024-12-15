import { Category } from "../app/category.model";
import { Product } from "../app/product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  title: string;
  price: number;
  description: string;
  categoryId: Category['id'];
  images: string[];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
