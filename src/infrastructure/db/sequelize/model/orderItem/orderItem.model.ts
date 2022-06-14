import {
  Table,
  Model,
  PrimaryKey,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { CustomerModel } from "../customer/customer.model";
import { ProductModel } from "../product/product.model";

@Table({
  tableName: "order_items",
  timestamps: false,
})
export class OrderItemModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

  // Relationship
  @ForeignKey(() => ProductModel)
  @Column({ allowNull: false })
  declare product_id: string;

  @BelongsTo(() => ProductModel)
  declare product: ProductModel;

  @ForeignKey(() => ProductModel)
  @Column({ allowNull: false })
  declare order_id: string;

  @BelongsTo(() => ProductModel)
  declare order: ProductModel;

  @Column({
    allowNull: false,
  })
  declare quantity: number;

  @Column({
    allowNull: false,
  })
  declare name: number;

  @Column({
    allowNull: false,
  })
  declare price: number;
}
