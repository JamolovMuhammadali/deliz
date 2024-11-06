import React, { useState } from 'react';
import './Cart.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MenuItems from './MenuItems.jsx';
import Prompt from './Prompt.jsx';

function Cart({ cartItems, removeItemFromCart, addItemToCart, NotifySucces }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null); // Track item to remove

  const handleConfirm = () => {
    if (itemToRemove !== null) {
      removeItemFromCart(itemToRemove); // Remove item if confirmed
      setItemToRemove(null); // Reset item
    }
    setShowPrompt(false);
  };

  const handleCancel = () => {
    setItemToRemove(null); // Reset item if cancelled
    setShowPrompt(false);
  };

  const requestRemoveItem = (index) => {
    setItemToRemove(index); // Set item to remove
    setShowPrompt(true); // Show prompt
  };

  return (
    <div className="cart-container">
      <Header />
      <div className="wrap-cart-menu-order">
        <div className="wrap-order">
          <div className="cart-container-title">
            <h1>Order List</h1>
          </div>
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <h1>Your cart is empty</h1>
              <p>Looks like you haven’t added anything to your cart yet.</p>
            </div>
          ) : (
            <ul className="wrap-order-ul">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <b>{item.name}</b>
                  <span>{item.price}</span>
                  <img className="wrap-order-ul-img" src={item.image} alt="error in cart" />
                  <button
                    className="wrap-order-remove-btn"
                    onClick={() => requestRemoveItem(index)} // Request confirmation
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {showPrompt && (
        <Prompt
          message="Are you sure you want to remove this item from the cart?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <Footer />
    </div>
  );
}

export default Cart;
