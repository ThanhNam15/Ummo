import "../../css/base.css";
import "./tag.css";

import { FaTag } from "react-icons/fa";
import { Container, Row, Col } from 'reactstrap';

export default function Tag() {
  return (
    <div className="tag">
        <Container>
            <div className="tag-icon">
                <FaTag/>
                <span>TAGS</span>
            </div>
            <div className="tag-info">
                <Row>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>13'7 x 6.3' x 4'</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>23'7 x 12.3' x 8'</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>Black</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>Blue</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>Gray</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>Orange</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>Pink</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>Red</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>White</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>x</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>xl</Col>
                    <Col className="tag-btn" sm={3} md={2} lg={1}>xxl</Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}
