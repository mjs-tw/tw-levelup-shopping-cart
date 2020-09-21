export class Cart {

  constructor() {
    this.total = 0.0;
    this.items = [];
  }

  getTotal() {
    return this.total;
  }

  countItems() {
    return this.items.length;
  }

  addItem(item) {
    this.items.push(item);
  }

};
