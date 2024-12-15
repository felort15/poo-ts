import { BaseHttpService } from "../app/service/base-http.service";
import { Product } from "../app/product.model";
import { apiUrl } from "../app/service/base-http.service";
import { CreateProductDto } from "../dtos/product.dto";
import axios from "axios";

export class ProductHttp2Service extends BaseHttpService<Product> {
  constructor() {
    super(`${apiUrl}/products`);
  }

  async create(dto: CreateProductDto): Promise<Product[]> {
    const { data } = await axios.post(this.url, dto);
    return [data];
  }
}
