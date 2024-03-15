import "../../css/base.css";
import "./like.css";

import { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';

import axios from 'axios'

import Products_detail from "../products_detail/Products_detail";

import img7 from "../../imgs/product_7.webp"
import img8 from "../../imgs/product_8.webp"
import img9 from "../../imgs/product_9.webp"
import img10 from "../../imgs/product_10.webp"
import img11 from "../../imgs/product_11.webp"
import img12 from "../../imgs/product_12.webp"


export default function Like() {
  const [data, setData] = useState([]);
  const url = 'https://658c2835859b3491d3f5996e.mockapi.io/Furniture';
  
  useEffect(() => {
      axios.get(url).then(function (res) {
        setData(res.data);
      });
  }, []);

  const arr = [img7, img8, img9, img10, img11, img12]

  return (
      <Container className="like">
        <h1 className="like-title">You Might Also Like</h1>
        <Row>
          {data.slice(6,12).map((item, index) => (
            <Products_detail key={index} product={item} img={arr[index]} />
          ))}
        </Row>
      </Container>
  );
}
