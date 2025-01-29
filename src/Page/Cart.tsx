import React from 'react';
import { CartItemType } from '../Service/Types';
import CartItem from '../Component/CartItem';

interface CartProps {
  cart: CartItemType[];
  addToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, addToCart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <>
      <section className="m-20 w-auto md:max-w-screen-md bg-zinc-900 flex flex-col items-start justify-center border border-zinc-700 rounded-xl p-10 gap-5">
        {cart.length === 0 ? (
          <p className="text-2xl">There are no items in your cart.</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.product.id} cartItems={cartItems} onRemove={removeFromCart} addToCart={addToCart} />
            ))}
            <p className="text-2xl">Total: ${total.toFixed(2)}</p>
            <Button onClickProps={() => alert('Proceed to checkout')}>Checkout</Button>
          </>
        )}
      </section>
    </>
  );
};

export default Cart;