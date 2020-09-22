
import { Cart } from "./Cart";
import { Item } from "./Item";
import { Product } from "./Product";

const PRODUCT_ONE = new Product("prod1", "Test product 1", 10.00);
const PRODUCT_TWO = new Product("prod2", "Test product 2", 15.50);

describe(Cart, () => {
  describe("getTotal()", () => {
    test("is zero when the cart is new", () => {
      const cart = new Cart();
      expect(cart.getTotal()).toBe(0.0);
    });
    test("is the total for an item when that is the only one", () => {
      const cart = new Cart();
      const item = new Item(PRODUCT_ONE);
      cart.addItem(item);
      expect(cart.getTotal()).toBe(item.getTotal());
      item.addOne();
      expect(cart.getTotal()).toBe(item.getTotal());
    });
    test("is the sum of totals for all items", () => {
      const cart = new Cart();
      const item1 = new Item(PRODUCT_ONE);
      const item2 = new Item(PRODUCT_TWO);
      cart.addItem(item1);
      cart.addItem(item2);
      expect(cart.getTotal()).toBe(item1.getTotal() + item2.getTotal());
      item1.addOne();
      item2.addOne();
      item1.addOne();
      item2.addOne();
      item2.addOne();
      expect(cart.getTotal()).toBe(item1.getTotal() + item2.getTotal());
    });
  });

  describe("countItems()", () => {
    test("is zero when the cart is new", () => {
      const cart = new Cart();
      expect(cart.countItems()).toBe(0);
    });
    test("is one when one item is in the cart", () => {
      const cart = new Cart();
      cart.addItem(new Item(new Product("ESP250", "Espresso Blend, 250g", 14.0)));
      expect(cart.countItems()).toBe(1);
    });
  });
});
