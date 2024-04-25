import "../../css/base.css";
import "./cart.css";

import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Header from "../../components/header/Header";

import img1 from "../../imgs/product_1.webp"
import img2 from "../../imgs/product_2.webp"
import img3 from "../../imgs/product_3.webp"
import img4 from "../../imgs/product_4.webp"
import img5 from "../../imgs/product_5.webp"
import img6 from "../../imgs/product_6.webp"
import img7 from "../../imgs/product_7.webp"
import img8 from "../../imgs/product_8.webp"
import img9 from "../../imgs/product_9.webp"
import img10 from "../../imgs/product_10.webp"
import img11 from "../../imgs/product_11.webp"
import img12 from "../../imgs/product_12.webp"
import img13 from "../../imgs/product_13.webp"
import img14 from "../../imgs/product_14.webp"
import img15 from "../../imgs/product_15.webp"
import img16 from "../../imgs/product_16.webp"
import img17 from "../../imgs/product_17.jpg"
import img18 from "../../imgs/product_18.webp"
import img19 from "../../imgs/product_19.webp"
import img20 from "../../imgs/product_20.webp"
import img21 from "../../imgs/product_21.webp"
import img22 from "../../imgs/product_22.webp"
import img23 from "../../imgs/product_23.webp"
import img24 from "../../imgs/product_24.webp"
import img25 from "../../imgs/product_25.webp"
import img26 from "../../imgs/product_26.webp"
import img27 from "../../imgs/product_27.webp"
import img28 from "../../imgs/product_28.webp"
import img29 from "../../imgs/product_29.webp"
import img30 from "../../imgs/product_30.webp"

import paypal from "../../imgs/paypal.png";

export default function Cart() {
  const { cart, removeItem, changeQty } = useContext(AppContext);
  let arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,  img16, img17, img18, img19, img20,  img21, img22, img23, img24, img25,  img26, img27, img28, img29, img30];
  
  return (
    <div>
        <Header/>
        {/* Navigation */}
        <div className="navigation">
            <h2 className="navigation-title">CART</h2>
            <div className="navigation-subtitle">
            <div className="navigation-subtitle-back">
                <IoHomeOutline/>
                <Link className="navigation-subtitle-link" style={{textDecoration: "none"}} to="/">Home</Link>
            </div>
            <div className="navigation-subtitle-now">
                <GoDotFill/>
                <span className="navigation-subtitle-info">Cart</span>
            </div>
            </div>
        </div>
        {/* Navigation */}
        <Container className="cart">
          <div className="cart-separate">
            <div className="cart-product">
              <div className="cart-product-info">
                <div className="cart-product-title">
                  <p className="cart-product-text-product">Product</p>
                  <p className="cart-product-text-price">Price</p>
                  <p className="cart-product-text-quantity">Quantity</p>
                  <p className="cart-product-text-delete">Delete</p>
                </div>
                {cart.map ((item, index) => (
                <div className="cart-product-detail">
                    <div className="cart-product-content">
                      <div className="cart-product-img">
                        <img src={arr[item.id-1]} alt="product" width="100%" />
                      </div>
                      <div className="cart-product-desc">
                        <p className="cart-product-desc-name" style={{marginBottom: "4px"}}>{item.name}</p>
                        <p className="cart-product-desc-color" style={{marginBottom: "4px"}}>Color: {item.color}</p>
                      </div>
                    </div>
                    <p className="cart-product-price">${item.price}</p>
                    <div className="cart-product-quantity">
                      <div className="cart-product-quantity-box">
                        <span className="cart-product-minus" onClick={() => changeQty(item.id, -1)}><i class="fa-solid fa-minus"></i></span>
                        <span className="cart-product-number">{item.qty}</span>
                        <span className="cart-product-plus" onClick={() => changeQty(item.id, 1)}><i class="fa-solid fa-plus"></i></span>
                      </div>
                    </div>
                    <p className="cart-product-delete" onClick={() => removeItem(item.id, -1)}><i class="fa-solid fa-trash"></i></p>
                  </div>
                  ))}
              </div>
              <div className="cart-product-btn">
                <div className="cart-product-btn-continue">
                  <Link to="/shop/" style={{textDecoration: "none", color: "var(--white-color)", fontWeight: "400"}}>
                    <p style={{marginBottom: "0"}}>Continue Shopping</p>
                  </Link>
                </div>
                <div className="cart-product-btn-checkout">
                  <Link to="/payment/" style={{textDecoration: "none", fontWeight: "400"}} className="cart-product-btn-continue-link">
                    <p style={{marginBottom: "0"}}>Proceed To Checkout</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cart-price">
              <div className="cart-price-info">
                <div className="cart-price-total">
                  <h4 className="cart-price-total-text">TOTAL : </h4>
                  <h4 className="cart-price-total-number">
                    ${cart.reduce((total, item) => total + item.price * item.qty, 0)}.00                    
                  </h4>
                </div>
                <div className="cart-price-shipping">
                  <h4 className="cart-price-shipping-text">SHIPPING : </h4>
                  <h4 className="cart-price-shipping-info">Calculated at checkout</h4>
                </div>
                <div className="cart-price-free">
                  <h6 className="cart-price-free-text">CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!</h6>
                  <div className="cart-price-free-process"></div>
                  <p className="cart-price-free-term">Free shipping for any orders above <span>$50.00</span></p>
                </div>
                <div className="cart-price-note">
                  <h6 className="cart-price-note-text">ADD A NOTE TO YOUR ORDER : </h6>
                  <input className="cart-price-note-add" type="text" placeholder="Add your note here" />
                </div>
              </div>
              <div className="cart-price-paypal">
                <img src={paypal} alt="paypal" width="20%" />
              </div>
            </div>
          </div>
        </Container>
    </div>
  )
}
