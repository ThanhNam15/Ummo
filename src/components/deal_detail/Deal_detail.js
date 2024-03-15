import "../../css/base.css";
import "./deal_detail.css";

import { Link } from "react-router-dom";
import { Card, Col } from "reactstrap";

export default function Deal_detail(props) {

  const { deal, img } = props;
  return (
    <Col className="deal_detail" sm={12} md={12} lg={12}>
    <div className="deal_detail-item">
        <Link style={{textDecoration: "none"}} to={`/product/${deal.id}`}>
            <Card style={{ border: "none"}} >
                <div className="deal_detail-img-fit">
                    <img className="deal_detail-img" alt="deal" src={img} width="100%" />
                    <span className="deal_detail-discount"> -50%</span>
                </div>
            </Card>
        </Link>
    </div>
    </Col>
  )
}
