import { Order } from "./index";
import { OrderItem } from "../orderItem";

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
    const item = new OrderItem("i1", "Item1", 100, "product1", 2);
    const order = new Order("123", "123", [item]);

    const total = order.total();
    expect(total).toBe(200);
  });

  it("should calculate total order two", () => {
    const item = new OrderItem("i1", "Item1", 150, "product2", 4);
    const order = new Order("123", "123", [item]);

    const total = order.total();
    expect(total).toBe(600);
  });

  it("should throw error if the item quantity is equal 0", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item1", 150, "product2", 0);
      const order = new Order("123", "123", [item]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
