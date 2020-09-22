import { Item } from "./Item";
import { Product } from "./Product";

const TEST_PRODUCT = new Product("test", "Test item", 10.00);

describe(Item, () => {
  describe("getCount()", () => {
    it("is zero when the Item is created", () => {
      const item = new Item(TEST_PRODUCT);
      expect(item.getCount()).toEqual(0);
    });
    it("is 1 when a product is added to it", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      expect(item.getCount()).toEqual(1);
    });
    it("is 0 when a product is added to it and then removed", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      item.removeOne();
      expect(item.getCount()).toEqual(0);
    });
  });
  describe("getTotal()", () => {
    it("is zero when the Item is created", () => {
      const item = new Item(TEST_PRODUCT);
      expect(item.getTotal()).toEqual(0.0);
    });
    it("is the product price when added to it", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      expect(item.getTotal()).toEqual(TEST_PRODUCT.getPrice());
    });
    it("is twice the product price when a second one is added to it", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      item.addOne();
      expect(item.getTotal()).toEqual(2 * TEST_PRODUCT.getPrice());
    });
    it("is zero when added to it and then removed", () => {
      const item = new Item(TEST_PRODUCT);
      item.addOne();
      item.removeOne();
      expect(item.getTotal()).toEqual(0.0);
    });
  });
});
