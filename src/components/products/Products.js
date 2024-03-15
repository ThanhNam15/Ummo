import "../../css/base.css";

import { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';

import axios from 'axios';

import Products_detail from "../products_detail/Products_detail";

import img1 from "../../imgs/product_1.webp"
import img2 from "../../imgs/product_2.webp"
import img3 from "../../imgs/product_3.webp"
import img4 from "../../imgs/product_4.webp"
import img5 from "../../imgs/product_5.webp"
import img6 from "../../imgs/product_6.webp"
import img7 from "../../imgs/product_7.webp"
import img8 from "../../imgs/product_8.webp"
import img9 from "../../imgs/product_9.webp"
import img10 from "../../imgs/product_10.webp"
import img11 from "../../imgs/product_11.webp"
import img12 from "../../imgs/product_12.webp"
import img13 from "../../imgs/product_13.webp"
import img14 from "../../imgs/product_14.webp"
import img15 from "../../imgs/product_15.webp"
import img16 from "../../imgs/product_16.webp"
import img17 from "../../imgs/product_17.jpg"
import img18 from "../../imgs/product_18.webp"
import img19 from "../../imgs/product_19.webp"
import img20 from "../../imgs/product_20.webp"
import img21 from "../../imgs/product_21.webp"
import img22 from "../../imgs/product_22.webp"
import img23 from "../../imgs/product_23.webp"
import img24 from "../../imgs/product_24.webp"
import img25 from "../../imgs/product_25.webp"
import img26 from "../../imgs/product_26.webp"
import img27 from "../../imgs/product_27.webp"
import img28 from "../../imgs/product_28.webp"
import img29 from "../../imgs/product_29.webp"
import img30 from "../../imgs/product_30.webp"

export default function Products() {
  const [data, setData] = useState([]);
  const url = "https://658c2835859b3491d3f5996e.mockapi.io/Furniture";
  
  useEffect(() => {
      axios.get(url).then(function (res) {
        setData(res.data);
      });
  }, []);

  let arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,  img16, img17, img18, img19, img20, img21, img22, img23, img24, img25,  img26, img27, img28, img29, img30];
  
  return (
    <div>
      <Container>
        <Row>
          {data.map((item, index) => (
            <Products_detail key={index} product={item} img={arr[index]} />
          ))}
        </Row>
      </Container>
    </div>
  )
}
