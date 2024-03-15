import "../../css/base.css";
import "./option.css";

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import armchair from "../../imgs/product_18.webp"
import lamp from "../../imgs/product_10.webp"
import table from "../../imgs/product_30.webp"
import plant from "../../imgs/product_23.webp"
import clock from "../../imgs/product_11.webp"

export default function Option() {

  return (
        <Container className="option">
            <Link style={{textDecoration: "none"}} className="option-product" to={"/shop"}>
                <div className="option-img"><img src={plant} alt="product" width="100%" /></div>
                <p className="option-text">Plant</p>
            </Link>
            <Link style={{textDecoration: "none"}} className="option-product" to={"/shop"}>
                <div className="option-img"><img src={lamp} alt="product" width="100%" /></div>
                <p className="option-text">Lamp</p>
            </Link>
            <Link style={{textDecoration: "none"}} className="option-product" to={"/shop"}>
                <div className="option-img"><img src={clock} alt="product" width="100%" /></div>
                <p className="option-text">Clock</p>
            </Link>
            <Link style={{textDecoration: "none"}} className="option-product" to={"/shop"}>
                <div className="option-img"><img src={armchair} alt="product" width="100%" /></div>
                <p className="option-text">Armchair</p>
            </Link>
            <Link style={{textDecoration: "none"}} className="option-product" to={"/shop"}>
                <div className="option-img"><img src={table} alt="product" width="100%" /></div>
                <p className="option-text">Table</p>
            </Link>
        </Container>
  )
}
