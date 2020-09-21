import { Cart } from './Cart';

describe(Cart, () => {

  describe('getTotal()', () => {

    it('is zero when the cart is new', () => {
      const cart = new Cart();
      expect(cart.getTotal()).toEqual(0.0);
    });

  });

});