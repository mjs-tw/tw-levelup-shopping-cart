export class LineItem {

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
}