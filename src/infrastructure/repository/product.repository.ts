import { Product } from "../../domain/entity/product";
import { ProductRepositoryInterface } from "../../domain/repository/product-repository.interface";
import { ProductModel } from "../db/sequelize/model/product.model";

export class ProductRepository implements ProductRepositoryInterface {
  async find(id: string): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  async create(entity: Product): Promise<void> {
    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price,
    });
  }

  async update(product: Product): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
