import {
    Item
} from "./Item";

const {
    Product
} = require("./Product");

const PRODUCTS = {
    "sp250": new Product("sp250", "Special Blend 250g", 12.50),
    "sp500": new Product("sp500", "Special Blend 500g", 20.00),
    "de250": new Product("de250", "Special Decaf 250g", 14.50),
    "de500": new Product("de500", "Special Decaf 500g", 15.00),
};

export function getAllItems() {
    return [
        new Item(PRODUCTS["sp250"]),
        new Item(PRODUCTS["sp500"]),
        new Item(PRODUCTS["de250"]),
        new Item(PRODUCTS["de500"]),
    ];
}
