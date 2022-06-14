export class Address {
  _street: string = "";
  _number: number = 0;
  _zip: string = "";
  _city: string = "";

  constructor(street: string, number: number, zip: string, city: string) {
    this._street = street;
    this._number = number;
    this._zip = zip;
    this._city = city;

    this.validate();
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }

  get zip(): string {
    return this._zip;
  }

  get city(): string {
    return this._city;
  }

  validate() {
    if (this._street.length === 0) {
      throw new Error("Street is mandatory");
    }
    if (this._number === 0) {
      throw new Error("Number is mandatory");
    }
    if (this._zip.length === 0) {
      throw new Error("Zip is mandatory");
    }
    if (this._city.length === 0) {
      throw new Error("City is mandatory");
    }
  }

  toString() {
    return `${this._street} ${this._number} ${this._zip} ${this._city}`;
  }
}
