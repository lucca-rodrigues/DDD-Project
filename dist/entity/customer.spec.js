"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("./address");
const customer_1 = require("./customer");
describe("Customer unit tests", () => {
    it("should throw when id is empty ", () => {
        expect(() => {
            let customer = new customer_1.Customer("", "John");
        }).toThrowError("Id is required");
    });
    it("should throw when Name is empty ", () => {
        expect(() => {
            let customer = new customer_1.Customer("1", "");
        }).toThrowError("Name is mandatory to activate a customer");
    });
    it("should change name ", () => {
        const customer = new customer_1.Customer("1", "John");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    });
    it("should activate customer ", () => {
        const customer = new customer_1.Customer("1", "John");
        const address = new address_1.Address("rua 123", 4, "12345678", "city");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });
    it("should deactivate customer ", () => {
        const customer = new customer_1.Customer("1", "John");
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    });
    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new customer_1.Customer("1", "John");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
});
