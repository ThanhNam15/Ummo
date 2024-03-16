import "../../css/base.css";
import "./collection.css";

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';

import axios from 'axios';

import Products_detail from "../products_detail/Products_detail";

import img1 from "../../imgs/product_1.webp";
import img2 from "../../imgs/product_2.webp";
import img3 from "../../imgs/product_3.webp";
import img4 from "../../imgs/product_4.webp";
import img5 from "../../imgs/product_5.webp";
import img6 from "../../imgs/product_6.webp";


export default function Collection() {
  const [data, setData] = useState([]);
  const url = 'https://658c2835859b3491d3f5996e.mockapi.io/Furniture';
  
  useEffect(() => {
      axios.get(url).then(function (res) {
        setData(res.data);
      });
  }, []);

  let arr = [img1, img2, img3, img4, img5, img6]

  return (
    <Container className="collection">
        <h1 className="collection-title">Our Collection</h1>
        <p className="collection-subtitle">Ummo's latest furniture product collection in 2024</p>
            <Row>
              {data.slice(0,6).map((item, index) => (
                <Products_detail key={index} product={item} img={arr[index]} />
              ))}
            </Row>
            <Link style={{textDecoration: "none"}} to={"/shop"}>
              <span className="collection-btn">View All</span>
            </Link>
      </Container>
  
  );
}
