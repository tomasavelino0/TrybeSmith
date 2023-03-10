import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Product } from '../types/products.types';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    const ProductCreated = await this.model.create(product);

    return ProductCreated;
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    
    return products;
  }
}

export default ProductService;