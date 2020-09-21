import { LineItem } from "./LineItem";
import { Product } from "./Product";

describe(LineItem, () => {
  describe("getCount()", () => {
    it("is zero when the LineItem is created", () => {
      const lineItem = new LineItem(new Product("Test", "test", 10.00));
      expect(lineItem.getCount()).toEqual(0);
    });
    it("is 1 when a product is added to it", () => {
      const lineItem = new LineItem(new Product("Test", "test", 10.00));
      lineItem.addOne();
      expect(lineItem.getCount()).toEqual(1);
    });
    it("is 0 when a product is added to it and then removed", () => {
      const lineItem = new LineItem(new Product("Test", "test", 10.00));
      lineItem.addOne();
      lineItem.removeOne();
      expect(lineItem.getCount()).toEqual(0);
    });
  });
});
