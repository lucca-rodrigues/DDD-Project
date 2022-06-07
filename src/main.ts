import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import { Order } from "./entity/order";
import { OrderItem } from "./entity/orderItem";

let customer = new Customer("123", "Johnny");
let address = new Address("rua 123", 4, "12345678", "city");

// Id Relation
customer.Address = address;
customer.activate();

// object - Entity Agregation
// const item1 = new OrderItem("1", "item1", 10);
// const item2 = new OrderItem("2", "item2", 15);

// const order = new Order("1", "123", [item1, item2]);
