import { OrderService } from "./order.service";
import { Customer } from "../../entity/customer";
import { OrderItem } from "../../entity/orderItem";
import { Order } from "../../entity/order/index";

describe("Order service unit tests", () => {
  it("should create an order", () => {
    const customer = new Customer("John", "Customer 1");
    const item1 = new OrderItem("item1", "Item 1", 10, "product1", 1);

    const order = OrderService.createOrder(customer, [item1]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });

  it("should get total of all orders", () => {
    const item1 = new OrderItem("i1", "item1", 100, "p1", 1);
    const item2 = new OrderItem("i2", "item2", 200, "p2", 2);

    const order = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c2", [item2]);

    const total = OrderService.getTotal([order, order2]);
    expect(total).toBe(500);
  });
});
