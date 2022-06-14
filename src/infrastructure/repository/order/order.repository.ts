// import { Order } from "sequelize/types";
import { OrderModel } from "../../db/sequelize/model/order/order.model";
import { OrderItemModel } from "../../db/sequelize/model/orderItem/orderItem.model";
// import { OrderItemModel } from "../../db/sequelize/model/order/orderItem.model";

export default class OrderRepository {
  async create(entity): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }
}
