"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
class OrderItem {
    constructor(id, name, price, productId, quantity) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
    }
    get quantity() {
        return this._quantity;
    }
    get price() {
        return this._price * this.quantity;
    }
}
exports.OrderItem = OrderItem;
