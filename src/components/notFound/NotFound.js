import "../../css/base.css";
import "./notFound.css";

import { Link } from 'react-router-dom';

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function NotFound() {
  return (
    <div>
      <Header/>
      {/* 404 */}
      <div className="notfound">
        <h1 className="notfound-404">404</h1>
        <h1 className="notfound-title">PAGE NOT FOUND</h1>
        <h2 className="notfound-subtitle">We're sorry — something has gone wrong on our end.</h2>
        <div className="notfound-btn">
          <Link style={{textDecoration: "none"}} className="notfound-btn-home" to="/">
            <div className="notfound-btn-back">Back To Homepage</div>
          </Link>
          <Link style={{textDecoration: "none"}} className="notfound-btn-shop" to="/shop/">
            <div className="notfound-btn-continue">Continue Shopping</div>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
