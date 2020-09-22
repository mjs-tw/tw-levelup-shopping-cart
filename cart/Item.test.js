import { Item } from "./Item";
import { Product } from "./Product";

const TEST_PRODUCT = new Product("test", "Test item", 10.00);

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
  describe("getTotal()", () => {
    test("is zero when the Item is created", () => {
      const item = new Item(TEST_PRODUCT);
      expect(item.getTotal()).toBe(0.0);
    });
    test("is the product price when added to it", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      expect(item.getTotal()).toBe(TEST_PRODUCT.getPrice());
    });
    test("is twice the product price when a second one is added to it", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      item.addOne();
      expect(item.getTotal()).toBe(2 * TEST_PRODUCT.getPrice());
    });
    test("is zero when added to it and then removed", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      item.removeOne();
      expect(item.getTotal()).toBe(0.0);
    });
  });
});
