import "../../css/base.css";
import "./outstanding.css";

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import product_1 from "../../imgs/product_18.webp"
import product_2 from "../../imgs/product_6.webp"
import product_3 from "../../imgs/product_2.webp"
import product_4 from "../../imgs/product_17.jpg"
import product_5 from "../../imgs/product_28.webp"

export default function Outstanding() {

  return (
      <Container className="outstanding">
            <h1 className="outstanding-title">Outstanding Products</h1>
            <p className="outstanding-subtitle">Furniture products with minimalist and compact designs suitable for every space</p>
                <Row>
                    <Col className="outstanding-left" sm={12} md={12} lg={6}>
                        <Link to={"/shop"} style={{textDecoration: "none"}} className="outstanding-left-left">
                            <div className="outstanding-left-img"><img src={product_1} alt="product" width="100%"/></div>
                            <h6 className="outstanding-left-text"> - SIGNATURE - </h6>
                            <div className="hide">HIDE</div>
                        </Link>
                    </Col>
                    <Col className="outstanding-right" sm={12} md={12} lg={6}>
                        <Row>
                            <Col className="outstanding-top-left" sm={6} md={6} lg={6}>
                                <Link to={"/shop"} style={{textDecoration: "none"}} className="outstanding-top-left">
                                    <div className="outstanding-top-left-img"><img src={product_2} alt="product" width="100%" height="100%"/></div>
                                    <div className="outstanding-top-left-btn">CHAIR</div>
                                    <div className="hide">HIDE</div>
                                </Link>
                            </Col>
                            <Col className="outstanding-top-right" sm={6} md={6} lg={6}>
                                <Link to={"/shop"} style={{textDecoration: "none"}} className="outstanding-top-right">
                                    <div className="outstanding-top-right-img"><img src={product_3} alt="product" width="100%" height="100%"/></div>
                                    <div className="outstanding-top-right-btn">ARMCHAIR</div>
                                    <div className="hide">HIDE</div>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="outstanding-bottom-left" sm={6} md={6} lg={6}>
                                <Link to={"/shop"} style={{textDecoration: "none"}} className="outstanding-bottom-left">
                                    <div className="outstanding-bottom-left-img"><img src={product_4} alt="product" width="100%" height="100%"/></div>
                                    <div className="outstanding-bottom-left-btn">SOFA</div>
                                    <div className="hide">HIDE</div>
                                </Link>
                            </Col>
                            <Col className="outstanding-bottom-right" sm={6} md={6} lg={6}>
                                <Link to={"/shop"} style={{textDecoration: "none"}} className="outstanding-bottom-right">
                                    <div className="outstanding-bottom-right-img"><img src={product_5} alt="product" width="100%" height="100%"/></div>
                                    <div className="outstanding-bottom-right-btn">TABLE</div>
                                    <div className="hide">HIDE</div>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
        </Container>
  )
}
