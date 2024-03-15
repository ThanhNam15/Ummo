import "../../css/base.css";
import "./payment.css";

import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from "../../AppContext";

import Header from "../../components/header/Header";

import paypal from "../../imgs/paypal.png";
import card from "../../imgs/logo_payment.png"

export default function Payment() {
  const { cart } = useContext(AppContext);

  return (
    <div>
        <Header/>
        <div className="payment">
          <div className="payment-left">
            <div className="payment-paypal">
              <p className="payment-paypal-express">Express checkout</p>
              <div className="payment-paypal-btn">
                <img src={paypal} alt="paypal" width="15%"/>
              </div>
            </div>
            <div className="payment-or">
              <div className="payment-or-line"></div>
              <p className="payment-or-text">OR</p>
              <div className="payment-or-line"></div>
            </div>
            <div className="payment-contact">
              <div className="payment-contact-title">
                <h1 className="payment-contact-title-left">Contact</h1>
                <p style={{marginBottom: "0"}} className="payment-contact-title-right">
                  Have an account? 
                  <span className="payment-contact-login">
                    <Link style={{textDecoration: "none"}} to="/login/">Login</Link>
                  </span>
                </p>
              </div>
              <div className="payment-contact-input">
                <input type="text" placeholder="Email or phone number" className="payment-contact-input-press"/>
                <form className="payment-contact-input-check">
                  <input type="checkbox" name="contact" value="Email" className="payment-contact-input-check-press"/>
                  <span>Email me with news and offers</span>
                </form>
              </div>
            </div>
            <div className="payment-delivery">
              <h1 className="payment-delivery-title">Delivery</h1>
              <div className="payment-delivery-input">
                <input type="text" placeholder="Country / Region" className="payment-delivery-country-press"/>
                <div className="payment-delivery-name">
                  <input type="text" placeholder="First name (optional)" className="payment-delivery-first-press"/>
                  <input type="text" placeholder="Last name" className="payment-delivery-last-press"/>
                </div>
                <input type="text" placeholder="Address" className="payment-delivery-address-press"/>
                <div className="payment-delivery-info">
                  <input type="text" placeholder="City" className="payment-delivery-city-press"/>
                  <input type="text" placeholder="Postal code" className="payment-delivery-code-press"/>
                </div>
                <form className="payment-delivery-input-check">
                  <input type="checkbox" name="delivery" value="Save" className="payment-delivery-input-check-press"/>
                  <span>Save this information for next time</span>
                </form>
              </div>
            </div>
            <div className="payment-shipping">
              <h1 className="payment-shipping-title">Shipping method</h1>
              <div className="payment-shipping-standard">
                <p style={{marginBottom: "0"}} className="payment-shipping-standard-text">Standard</p>
                <p style={{marginBottom: "0"}} className="payment-shipping-standard-free">Free</p>
              </div>
            </div>
            <div className="payment-payment">
              <h1 className="payment-payment-title">Payment</h1>
              <h6 className="payment-payment-subtitle">All transactions are secure and encrypted.</h6>
              <div className="payment-payment-info">
                <div className="payment-payment-card">
                  <p style={{marginBottom: "0"}} className="payment-payment-card-text">Credit card</p>
                  <div className="payment-payment-card-img">
                    <img src={card} alt="card" width="100%"/>
                  </div>
                </div>
                <div className="payment-payment-center">
                  <input className="payment-payment-number" type="text" placeholder="Card number"/>
                </div>
                <div className="payment-payment-center">
                  <div className="payment-payment-center-date-code">
                    <input type="text" placeholder="Expiration date (MM / YY)" className="payment-payment-date-press"/>
                    <input type="text" placeholder="Security code" className="payment-payment-code-press"/>
                  </div>
                </div>
                <div className="payment-payment-center">
                  <input className="payment-payment-name" type="text" placeholder="Name on card"/>
                </div>
                <div className="payment-payment-center">
                  <form className="payment-payment-input-check">
                    <input type="checkbox" name="billing" value="Billing" className="payment-payment-input-check-press"/>
                    <span>Use shipping address as billing address</span>
                  </form>
                </div>
              </div>
              <div className="payment-payment-btn">Pay Now</div>
            </div>
          </div>
          <div className="payment-right">
            <div className="payment-free">
              <p style={{fontSize: "0.9rem", marginBottom: "0"}} className="payment-free-text">Shipping: </p>
              <p style={{fontSize: "0.9rem", marginBottom: "0"}} className="payment-free-number">FREE </p>
            </div>
            <div className="payment-total">
              <h5 className="payment-total-text">Total: </h5>
              <h4 className="payment-total-number"> 
                ${cart.reduce((total, item) => total + item.price * item.qty, 0)}.00                    
              </h4>
            </div>
          </div>
        </div>
    </div>
  )
}
