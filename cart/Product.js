/**
 * A product that can be sold.
 */
export class Product {

  constructor(sku, name, price) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getSku() {
    return this.sku;
  }

  getPrice() {
    return this.price;
  }
}