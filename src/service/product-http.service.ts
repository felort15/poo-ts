import { Product } from '../app/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { BaseHttpService } from '../app/service/base-http.service';
import { ProductService } from './product-services.model';
import axios from 'axios';

export class ProductHttpService extends BaseHttpService<Product> implements ProductService {
  constructor() {
    super('https://api.escuelajs.co/api/v1/products');
  }

  async create(dto: CreateProductDto): Promise<Product[]> {
    const { data } = await axios.post(this.url, dto);
    return [data];
  }

  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product[]> {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return [data];
  }

  async findOne(id: Product['id']): Promise<Product | undefined> {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
