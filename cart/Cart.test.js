
import { Cart } from "./Cart";
import { Item } from "./Item";
import { Product } from "./Product";
import { randLoop } from "./TestHelper";

const PRODUCT_ONE = new Product("prod1", "Test product 1", 250, 10.00);
const PRODUCT_TWO = new Product("prod2", "Test product 2", 500, 15.50);

describe(Cart, () => {
  describe("getTotalPrice()", () => {
    test("is zero when the cart is new", () => {
      const cart = new Cart();
      expect(cart.getTotalPrice()).toBe(0.0);
    });
    test("is the total for an item when that is the only one", () => {
      const cart = new Cart();
      const item = new Item(PRODUCT_ONE);
      cart.addItem(item);
      expect(cart.getTotalPrice()).toBe(item.getTotalPrice());
      item.addOne();
      expect(cart.getTotalPrice()).toBe(item.getTotalPrice());
    });
    test("is the sum of totals for all items", () => {
      const cart = new Cart();
      const item1 = new Item(PRODUCT_ONE);
      const item2 = new Item(PRODUCT_TWO);
      cart.addItem(item1);
      cart.addItem(item2);
      expect(cart.getTotalPrice()).toBe(item1.getTotalPrice() + item2.getTotalPrice());
      randLoop(5, () => item1.addOne());
      randLoop(5, () => item2.addOne());
      expect(cart.getTotalPrice()).toBe(item1.getTotalPrice() + item2.getTotalPrice());
    });
  });

  describe("getTotalWeight()", () => {
    let cart;
    beforeEach(() => {
      cart = new Cart();
      cart.addItem(new Item(PRODUCT_ONE));
      cart.addItem(new Item(PRODUCT_TWO));
    });
    test("is zero when the cart has items but none added", () => {
      expect(cart.getTotalWeight()).toBe(0);
    });
    test("is the sum of the total weights of all the products", () => {
      randLoop(10, () => cart.getItem(0).addOne());
      randLoop(10, () => cart.getItem(1).addOne());
      expect(cart.getTotalWeight()).toBe(
        cart.getItem(0).getTotalWeight() + cart.getItem(1).getTotalWeight()
      );
    });
  });

  describe("countItems()", () => {
    test("is zero when the cart is new", () => {
      const cart = new Cart();
      expect(cart.countItems()).toBe(0);
    });
    test("is one when one item is in the cart", () => {
      const cart = new Cart();
      cart.addItem(new Item(new Product("ESP250", "Espresso Blend, 250g", 250, 14.0)));
      expect(cart.countItems()).toBe(1);
    });
  });

  describe("calculateDiscount()", () => {
    let cart;
    beforeEach(() => {
      cart = new Cart();
      cart.addItem(new Item(PRODUCT_ONE));
      cart.addItem(new Item(PRODUCT_TWO));
    });
    test("is zero for zero weight", () => {
        expect(cart.calculateDiscount()).toBe(0.0);
    });
    test("is zero for less than 500g", () => {
        cart.getItem(0).addOne();
        expect(cart.calculateDiscount()).toBe(0.0);
    });
    test("is 10% for 500g or more", () => {
        cart.getItem(1).addOne();
        expect(cart.calculateDiscount()).toBe(0.1);
        cart.getItem(0).addOne();
        expect(cart.calculateDiscount()).toBe(0.1);
        cart.getItem(1).addOne();
        expect(cart.calculateDiscount()).toBe(0.1);
    });
});

});
