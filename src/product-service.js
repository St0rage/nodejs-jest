import { getAllProduct, getProductByID } from "./database";

export class ProductService {
  static findById(id) {
    return getProductByID(id);
  }

  static findAll() {
    return getAllProduct();
  }
}
