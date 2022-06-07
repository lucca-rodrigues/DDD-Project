"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("./entity/address");
const customer_1 = require("./entity/customer");
let customer = new customer_1.Customer("123", "Johnny");
let address = new address_1.Address("rua 123", 4, "12345678", "city");
// Id Relation
customer.Address = address;
customer.activate();
// object - Entity Agregation
// const item1 = new OrderItem("1", "item1", 10);
// const item2 = new OrderItem("2", "item2", 15);
// const order = new Order("1", "123", [item1, item2]);
