export class Cart {

  constructor() {
    this.items = [];
  }

  getTotalPrice() {
    return this.items.map(i => i.getTotalPrice()).reduce((a, b) => a + b, 0.0);
  }

  getTotalWeight() {
    return this.items.map(i => i.getTotalWeight()).reduce((a, b) => a + b, 0);
  }

  countItems() {
    return this.items.length;
  }

  addItem(item) {
    this.items.push(item);
  }

  getItem(idx) {
    return this.items[idx];
  }

};
