import {
    Item
} from "./Item";
import {
    Product
} from "./Product";

const TEST_PRODUCT = new Product("test", "Test item", 10.00);

describe(Item, () => {
    describe("getCount()", () => {
        it("is 1 when the Item is created", () => {
            const item = new Item(TEST_PRODUCT);
            expect(item.getCount()).toBe(1);
        });

        it("is 2 when a product is added to it", () => {
            const item = new Item(TEST_PRODUCT);
            item.addOne();
            expect(item.getCount()).toBe(2);
        });

        it("is 1 when a product is added to it and then removed", () => {
            const item = new Item(TEST_PRODUCT);
            item.addOne();
            item.removeOne();
            expect(item.getCount()).toBe(1);
        });
    });
    describe("getTotal()", () => {
        it("is 10 when the Item is created", () => {
            const item = new Item(TEST_PRODUCT);
            expect(item.getTotal()).toBe(10.0);
        });

        it("is the product price when created", () => {
            const item = new Item(TEST_PRODUCT);
            expect(item.getTotal()).toBe(TEST_PRODUCT.getPrice());
        });

        it("is twice the product price when a second one is added to it", () => {
            const item = new Item(TEST_PRODUCT);
            item.addOne();
            expect(item.getTotal()).toBe(2 * TEST_PRODUCT.getPrice());
        });

        it("is zero when added to it and then removed", () => {
            const item = new Item(TEST_PRODUCT);
            item.removeOne();
            expect(item.getTotal()).toBe(0.0);
        });
    });
});
