/**
 * A line item in a cart that contains zero or more of one type of product.
 */
export class Item {

  constructor(product) {
    this.product = product;
    this.count = 0;
  }

  getCount() {
    return this.count;
  }

  addOne() {
    this.count++;
  }

  removeOne() {
    this.count--;
  }

  getTotal() {
    return this.count * this.product.getPrice();
  }
}