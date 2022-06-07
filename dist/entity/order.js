"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, customerId, items) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._customerId.length === 0) {
            throw new Error("CustomerId is required");
        }
        if (this._items.length === 0) {
            throw new Error("Items are required from order");
        }
        if (this._items.some((item) => item.quantity === 0)) {
            throw new Error("Quantity must be greater than 0");
        }
        return true;
    }
    total() {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }
}
exports.Order = Order;
