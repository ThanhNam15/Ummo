import "../../css/base.css";
import "./banner.css";

import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import banner from "../../imgs/banner.webp";

export default function Banner() {

  return (
    <div className="banner">
      <Container>
        <div>
          <Row className="banner-product">
              <Col className="banner-info" sm={12} md={12} lg={6}>
                <h1 className="banner-title">New Generation Sofa</h1>
                <div className="banner-subtitle">
                  <p>Suitable for various decorating styles, from modern to classic, this sofa is the perfect focal point for any living space. The blend of practicality and high aesthetics brings satisfaction to the users.</p>
                </div>
                <Link style={{textDecoration: "none"}} to={"/shop"}>
                  <span className="banner-btn">Learn More</span>
                </Link>
              </Col>
              <Col className="banner-img" sm={12} md={12} lg={6}>
                <img src={banner} width="100%"/>
              </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
