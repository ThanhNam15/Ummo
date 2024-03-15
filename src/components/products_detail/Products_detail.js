import "../../css/base.css";
import "./products_detail.css";

import { Link } from "react-router-dom";
import { Card, CardBody, CardText, Col } from "reactstrap";

export default function Products_detail(props) {
  const { product, img } = props;
  return (
      <Col className="product_detail" sm={12} md={6} lg={4}>
        <div className="product_detail-item">
          <Link style={{textDecoration: "none"}} to={`/product/${product.id}`}>
            <Card style={{ border: "none"}} >
              <img className="product_detail-img" alt="product" src={img} />
              <CardBody className="product_detail-info">
                <div className="product_detail-content">
                  <CardText className="product_detail-content--title">
                    {product.name}
                  </CardText>
                  <CardText className="product_detail-content--price">
                    ${product.price}
                  </CardText>
                </div>
              </CardBody>
              <div className="product_detail-btn">Buy now</div>
            </Card>
          </Link>
        </div>
      </Col>
  );
}
