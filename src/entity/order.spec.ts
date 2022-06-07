import { Address } from "./address";
import { Order } from "./order";
import { OrderItem } from "./orderItem";

describe("Customer unit tests", () => {
  it("should throw when id is empty ", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw when customerId is empty ", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("should throw when Items is empty ", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items are required from order");
  });

  it("should calculate total", () => {
    const item = new OrderItem("i1", "Item1", 100);
    const itemTwo = new OrderItem("i1", "Item1", 150);

    const order = new Order("123", "123", [item]);
    const orderTwo = new Order("123", "123", [item, itemTwo]);

    const total = order.total();
    expect(total).toBe(100);

    const orderTwoTotal = orderTwo.total();
    expect(orderTwoTotal).toBe(250);
  });
});
