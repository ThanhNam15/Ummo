import "../../css/base.css";
import "./footer.css";

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Col, Row, Container } from "reactstrap";

import logo from "../../imgs/logo.png"
import payment from "../../imgs/logo_payment.png"

export default function Footer() {
  return (
    <Container>
      <Row> 
        <Col className="footer" sm={6} md={6} lg={3}>
          <h5 className="footer-title">For you</h5>
          <ul className="footer-subtitle">
            <li><span>Collections</span></li>
            <li><span>New arrival</span></li>
            <li><span>Special discount</span></li>
          </ul>
        </Col>
        <Col className="footer" sm={6} md={6} lg={3}>
          <h5 className="footer-title">Help</h5>
          <ul className="footer-subtitle">
            <li><span>FAQ's</span></li>
            <li><span>Contact us</span></li>
            <li><span>Tract your order</span></li>
          </ul>
        </Col>
        <Col className="footer" sm={6} md={6} lg={3}>
          <h5 className="footer-title">Shop</h5>
          <ul className="footer-subtitle">
            <li><span>Find a store</span></li>
            <li><span>Sale exclusions</span></li>
            <li><span>Shipping information</span></li>
          </ul>
        </Col>
        <Col className="footer" sm={6} md={6} lg={3}>
          <div className="footer-logo">
            <img src={logo} alt="logo" width="100px"/>
          </div>
          <div className="footer-content">
            <p>Established since 1995, we inspire people through interior design.</p>
          </div>
          <div className="footer-social">
            <span className="footer-social-instagram"><FaInstagram/></span>
            <span className="footer-social-youtube"><FaYoutube/></span>
          </div>
        </Col>
      </Row>
      <div className="footer-info">
        <div className="footer-info-copyright">
          © Ummo 2024
        </div>
        <div className="footer-info-payment">
          <span><img src={payment} alt="payment" width="120px" /></span>
        </div>
      </div>
    </Container>
    

      
      
  );
}
