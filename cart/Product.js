import { descriptions } from "jest-config";

export class Product {

  constructor(sku, name, weight, price) {
    this.sku = sku;
    this.name = name;
    this.weight = weight;
    this.price = price;
  }

  getWeight() {
    return this.weight;
  }

  getPrice() {
    return this.price;
  }
}