import { Address } from "./address";
import { Product } from "./product";

describe("Product unit tests", () => {
  it("should throw when id is empty ", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("should throw when name is empty ", () => {
    expect(() => {
      const product = new Product("1", "", 100);
    }).toThrowError("Name is required");
  });
});
