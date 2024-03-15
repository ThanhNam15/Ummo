import "../../css/base.css";
import "./green.css";

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import plant_1 from "../../imgs/product_12.webp";
import plant_3 from "../../imgs/product_31.webp";
import plant_2 from "../../imgs/product_15.webp";

export default function Green() {

  return (
    <Container className="green">
        <h1 className="green-title">Green Space</h1>
        <p className="green-subtitle">The green color of trees keeps your space fresh and clean</p>
            <Row>
                <Col className="green-product" sm={12} md={4} lg={4}>
                    <Link style={{textDecoration: "none", color: "var(--text-color)"}} className="green-plant" to="/shop/">
                        <div className="green-img"><img src={plant_1} alt="plant" width="100%"/></div>
                        <div className="green-btn">
                            <p style={{marginBottom: "4px", marginRight: "6px", fontSize: "1.2rem", fontWeight: "600"}} className="green-btn-text">Plant now</p>
                            <span style={{marginBottom: "0", marginLeft: "6px", fontSize: "1.2rem"}} className="green-btn-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </Link>
                </Col>
                <Col className="green-product" sm={12} md={4} lg={4}>
                    <Link style={{textDecoration: "none", color: "var(--text-color)"}} className="green-plant" to="/shop/">
                        <div className="green-img"><img src={plant_2} alt="plant" width="100%"/></div>
                        <div className="green-btn">
                            <p style={{marginBottom: "4px", marginRight: "6px", fontSize: "1.2rem", fontWeight: "600"}} className="green-btn-text">Plant now</p>
                            <span style={{marginBottom: "0", marginLeft: "6px", fontSize: "1.2rem"}} className="green-btn-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </Link>
                </Col>
                <Col className="green-product" sm={12} md={4} lg={4}>
                    <Link style={{textDecoration: "none", color: "var(--text-color)"}} className="green-plant" to="/shop/">
                        <div className="green-img"><img src={plant_3} alt="plant" width="100%"/></div>
                        <div className="green-btn">
                            <p style={{marginBottom: "4px", marginRight: "6px", fontSize: "1.2rem", fontWeight: "600"}} className="green-btn-text">Plant now</p>
                            <span style={{marginBottom: "0", marginLeft: "6px", fontSize: "1.2rem"}} className="green-btn-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </Link>
                </Col>
            </Row>
    </Container>
  )
}
