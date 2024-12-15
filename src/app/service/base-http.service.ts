import axios from "axios";

import { Product } from "../product.model";
import { Category } from "../category.model";

export const apiUrl: string = 'https://api.escuelajs.co/api/v1';

export class BaseHttpService <TypeClass>{
  constructor(
    protected url: string
  ){}

  async getAll(): Promise<TypeClass[]>{
    const rta = await axios.get(this.url);
    return rta.data;
  }

  async update(id: number, changes: unknown): Promise<TypeClass[]> {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return [data];
  }
}

//const service = new BaseHttpService<string>();
//service.getAll();

//const service2 = new BaseHttpService<number>();
//service2.getAll();

(async () => {
  const productService = new BaseHttpService<Product>(`${apiUrl}/products`);
  const products = await productService.getAll();
  console.log(products.length);

const categoryService = new BaseHttpService<Category>(`${apiUrl}/categories`);
const categories = await categoryService.getAll();
console.log(categories.length);
})();
