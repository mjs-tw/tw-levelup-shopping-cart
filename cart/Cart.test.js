
import { Cart } from "./Cart";
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
      cart.addItem(new Product("Espresso Blend, 250g", "ESP250", 14.0));
      expect(cart.countItems()).toEqual(1);
    });
  });
});
