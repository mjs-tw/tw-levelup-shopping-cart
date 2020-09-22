
import { Cart } from "./Cart";
import { Item } from "./Item";
import { Product } from "./Product";

describe(Cart, () => {
  describe("getTotal()", () => {
    it("is zero when the cart is new", () => {
      const cart = new Cart();
      expect(cart.getTotal()).toEqual(0.0);
    });
  });

  describe("countItems()", () => {
    it("is zero when the cart is new", () => {
      const cart = new Cart();
      expect(cart.countItems()).toEqual(0);
    });
    it("is one when one item is in the cart", () => {
      const cart = new Cart();
      cart.addItem(new Item(new Product("ESP250", "Espresso Blend, 250g", 14.0)));
      expect(cart.countItems()).toEqual(1);
    });
  });
});
