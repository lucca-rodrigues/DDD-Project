import { v4 as uuid } from "uuid";
import { Customer } from "../../entity/customer";
import { Order } from "../../entity/order";
import { OrderItem } from "../../entity/orderItem";
export class OrderService {
  static createOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length === 0) {
      throw new Error("Order must have at least one item");
    }

    const order = new Order(uuid(), customer.id, items);
    customer.addRewardPoints(order.total() / 2);
    return order;
  }

  static getTotal(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0);
  }
}
