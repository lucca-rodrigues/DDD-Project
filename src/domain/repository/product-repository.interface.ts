import { Product } from "../entity/product";
import { RepositoryInterface } from "./repository-interface";

export interface ProductRepository extends RepositoryInterface<Product> {}
