"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._price <= 0) {
            throw new Error("Price muste be greater than zero");
        }
        return true;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    changeName(name) {
        this._name = name;
        this.validate();
    }
    changePrice(price) {
        this._price = price;
        this.validate();
    }
}
exports.Product = Product;
