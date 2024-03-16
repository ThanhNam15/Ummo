import "../../css/base.css";
import "./deal.css";

import Slider from "react-slick";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Container, Row } from 'reactstrap';
import { useState, useEffect, useRef } from 'react';

import axios from 'axios';

import Deal_detail from "../deal_detail/Deal_detail";

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

export default function Deal() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  const [data, setData] = useState([]);
  const url = "https://658c2835859b3491d3f5996e.mockapi.io/Furniture";
  
  useEffect(() => {
    axios.get(url).then(function (res) {
      setData(res.data);
    });
}, []);

let arr = [img21, img22, img23, img24, img25,  img26, img27, img28, img29, img30];

  return (
    <div>
        <Container>
            <Row>
                <div className="deal-title" style={{ textAlign: "center" }}>
                    <span className="button btn-left" onClick={previous}><IoIosArrowBack /></span>
                    <h1 className="deal-title-text">Flash Deal</h1>
                    <span className="button btn-right" onClick={next}><IoIosArrowForward /></span>
                </div>
                <p className="deal-subtitle">50% discount, choose your favorite product now</p>
                <Slider ref={slider => { sliderRef = slider;}} {...settings}>
                    {data.slice(20,30).map((item, index) => (
                        <Deal_detail key={index} deal={item} img={arr[index]} />
                    ))}
                </Slider>
            </Row>
      </Container>
    </div>
  )
}
