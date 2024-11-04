import React from 'react'
import './Checkout.css'
import Header from './Header'
import Footer from './Footer'
import { FaAngleLeft } from "react-icons/fa6";

function checkout() {
  return (
    <div className='wrap-checkout'>
      <Header />
      <div className="checkout">

        <div className="checkout-title">
          <button className="checkout-back"><FaAngleLeft />
          </button>
          <h1>Checkout</h1>
          <div className="checkout-hidden-btn"></div>
        </div>

        <div className="checkout-adress">
          <h2>Shipping address</h2>
          <form className='checkout-adress-form'>
            <input placeholder='Your Adress...' type="text" />
            <button>Change</button>
          </form>
        </div>

        <div className="checkout-data">
          <h2>Order data</h2>

          <form class="order-form">

            <div class="form-row">
              <input type="text" name="firstName" placeholder="First name" class="form-input" />
              <input type="text" name="lastName" placeholder="Last name" class="form-input" />
            </div>

            <div class="form-row">
              <input type="text" name="phoncreateeNumber" placeholder="Phone number" class="form-input" />
              <input type="email" name="email" placeholder="Email address" class="form-input" />
            </div>

            <textarea name="note" placeholder="Note" class="form-textarea"></textarea>

            <h3 class="section-title">Order time</h3>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="orderTime" value="now" /> Order now
              </label>
              <label class="radio-label">
                <input type="radio" name="orderTime" value="later" /> Order later
              </label>
            </div>

            <h3 class="section-title">Order method</h3>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" name="orderMethod" value="delivery" /> Delivery
              </label>
              <label class="radio-label">
                <input type="radio" name="orderMethod" value="takeaway" /> Take away
              </label>
            </div>

            <h3 class="section-title">Payment method</h3>
            <div class="grid">
              <label class="radio-label">
                <input type="radio" name="paymentMethod" value="cashOnDelivery" />  Cash On Delivery
              </label>
              <label class="radio-label">
                <input type="radio" name="paymentMethod" value="virtualAccount" />  BCA Virtual Account
              </label>
              <label class="radio-label">
                <input type="radio" name="paymentMethod" value="creditCard" />     Credit Card
              </label>
              <label class="radio-label">
                <input type="radio" name="paymentMethod" value="transferBank" /> Transfer Bank
              </label>
            </div>

            <div class="checkbox-container">
              <label class="checkbox-label">
                <input type="checkbox" name="agreeToTerms" />
                Choose to indicate that you have read and agree to our Terms of use & Privacy Policy.
              </label>
            </div>

            <div className="order-form-wrap-btn">
              <button type="submit" class="submit-button">Order now</button>
            </div>
          </form>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default checkout