export class Cart {

  constructor() {
    this.items = [];
  }

  getTotal() {
    return this.items.map(i => i.getTotal()).reduce((a, b) => a + b, 0.0);
  }

  countItems() {
    return this.items.length;
  }

  addItem(item) {
    this.items.push(item);
  }

};
