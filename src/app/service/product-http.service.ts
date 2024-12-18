import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../../dtos/product.dto"
import { ProductService } from "../../service/product-services.model"
import { Product } from "../product.model"

export class ProductHttpService implements ProductService {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getAll(): Promise<Product[]> {
    const rta = await axios.get(this.url);
    const products = rta.data;
    return products;
  }

  async update(id: Product['id'], changes: UpdateProductDto | CreateProductDto): Promise<Product[]> {
    const rta = await axios.put(`${this.url}/${id}`, changes);
    return rta.data;
  }

  async create(dto: CreateProductDto): Promise<Product[]> {
    const rta = await axios.post(this.url, dto);
    return rta.data;
  }

  async   findOne(id: Product['id']): Promise<Product | undefined> {
    const rta = await axios.get(`${this.url}/${id}`);
    return rta.data;
  }

}
