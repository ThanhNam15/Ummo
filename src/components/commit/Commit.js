import "../../css/base.css";
import "./commit.css";

import { Col, Row, Container } from 'reactstrap';

export default function Commit() {
  return (
    <div>
        <Container className="commit">
            <Row>
                <Col className="commit-info" sm={6} md={6} lg={3}>
                  <div className="commit-icon"><i class="fa-solid fa-truck"></i></div>
                  <div className="commit-text">
                    <h6 className="commit-title">Free Shipping</h6>
                    <p className="commit-subtitle">Get free shipping on orders of $100 or more</p>
                  </div>
                </Col>
                <Col className="commit-info" sm={6} md={6} lg={3}>
                  <div className="commit-icon"><i class="fa-solid fa-mobile-screen"></i></div>
                  <div className="commit-text">
                    <h6 className="commit-title">Customer Service</h6>
                    <p className="commit-subtitle">A question? Please contact us at 0834-311-883</p>
                  </div>
                </Col>
                <Col className="commit-info" sm={6} md={6} lg={3}>
                  <div className="commit-icon"><i class="fa-solid fa-heart"></i></div>
                  <div className="commit-text">
                    <h6 className="commit-title">Refer A Friend</h6>
                    <p className="commit-subtitle">Refer a friend and get 15% off each other</p>
                  </div>
                </Col>
                <Col className="commit-info" sm={6} md={6} lg={3}>
                  <div className="commit-icon"><i class="fa-solid fa-money-bill"></i></div>
                  <div className="commit-text">
                    <h6 className="commit-title">Secure Payment</h6>
                    <p className="commit-subtitle">Your payment information is processed securely</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
