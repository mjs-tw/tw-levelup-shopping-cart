import { Item } from "./Item";
import { Product } from "./Product";

const TEST_PRODUCT = new Product("test", "Test item", 200, 10.00);

describe(Item, () => {
  describe("getCount()", () => {
    test("is zero when the Item is created", () => {
      const item = new Item(TEST_PRODUCT);
      expect(item.getCount()).toBe(0);
    });
    test("is 1 when a product is added to it", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      expect(item.getCount()).toBe(1);
    });
    test("is 0 when a product is added to it and then removed", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      item.removeOne();
      expect(item.getCount()).toBe(0);
    });
  });
  describe("getTotalWeight()", () => {
    test("is zero when the Item is created", () => {
      const item = new Item(TEST_PRODUCT);
      expect(item.getTotalWeight()).toBe(0);
    });
    test("is the weight of as many of the products as have been added", () => {
      const item = new Item(TEST_PRODUCT);
      for (let i = 1; i <= 10; i++) {
        item.addOne();
        expect(item.getTotalWeight()).toBe(i * TEST_PRODUCT.getWeight());
      }
      for (let i = 1; i <= 10; i++) {
        item.removeOne();
        expect(item.getTotalWeight()).toBe((10 - i) * TEST_PRODUCT.getWeight());
      }
    });
  });
  describe("getTotalPrice()", () => {
    test("is zero when the Item is created", () => {
      const item = new Item(TEST_PRODUCT);
      expect(item.getTotalPrice()).toBe(0.0);
    });
    test("is the product price when added to it", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      expect(item.getTotalPrice()).toBe(TEST_PRODUCT.getPrice());
    });
    test("is twice the product price when a second one is added to it", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      item.addOne();
      expect(item.getTotalPrice()).toBe(2 * TEST_PRODUCT.getPrice());
    });
    test("is zero when added to it and then removed", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      item.removeOne();
      expect(item.getTotalPrice()).toBe(0.0);
    });
  });
});
