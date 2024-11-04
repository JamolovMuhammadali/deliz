import React from 'react';

function Cart({ cartItems, removeItemFromCart }) {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.name} - {item.price}</span>
              <button 
                onClick={() => {
                  if (window.confirm('Are you sure you want to remove this item?')) {
                    removeItemFromCart(index);
                  }
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
