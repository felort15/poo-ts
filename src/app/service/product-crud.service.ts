import { apiUrl } from "./base-http.service";

import { ProductHttpService } from "./product-http.service";
import { Product } from "../product.model";
import { CreateProductDto, UpdateProductDto } from "../../dtos/product.dto";
import { ProductHttp2Service } from "../../service/product-http2.service";

export class ProductCrudService {
  private productHttpService = new ProductHttp2Service();

  async getAll() {
    return this.productHttpService.getAll();
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    //permisos
    //logica
    //validaciones
    return this.productHttpService.update(id, changes);
  }

  async create(dto: CreateProductDto) {
    return this.productHttpService.create(dto);
  }
}

const productCrudService = new ProductCrudService();
productCrudService.getAll();
productCrudService.update(1, {
  title: 'New title',
  price: 100,
});
