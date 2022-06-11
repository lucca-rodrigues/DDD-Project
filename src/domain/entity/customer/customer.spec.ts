import { Address } from "../address";
import { Customer } from "./index";

describe("Customer unit tests", () => {
  it("should throw when id is empty ", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw when Name is empty ", () => {
    expect(() => {
      let customer = new Customer("1", "");
    }).toThrowError("Name is mandatory to activate a customer");
  });

  it("should change name ", () => {
    const customer = new Customer("1", "John");
    customer.changeName("Jane");

    expect(customer.name).toBe("Jane");
  });

  it("should activate customer ", () => {
    const customer = new Customer("1", "John");
    const address = new Address("rua 123", 4, "12345678", "city");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate customer ", () => {
    const customer = new Customer("1", "John");
    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "John");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "John");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
