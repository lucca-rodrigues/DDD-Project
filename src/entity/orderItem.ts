export class OrderItem {
  _id: string;
  _name: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this.price = price;
  }
}
