import "../../css/base.css";
import "./shop_detail.css";

import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppContext";
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Collapse, Card, CardBody } from 'reactstrap';

import Header from "../../components/header/Header";
import Like from "../../components/like/Like";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";

import axios from "axios";

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

import material from "../../imgs/material.png"

import checkout from "../../imgs/logo_checkout.png"
import paypal from "../../imgs/paypal.png"

export default function Shop_detail(props) {
  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);

  const [isOpen3, setIsOpen3] = useState(false);
  const toggle3 = () => setIsOpen3(!isOpen3);

  const [isOpen4, setIsOpen4] = useState(false);
  const toggle4 = () => setIsOpen4(!isOpen4);

  const { addCart } = useContext(AppContext);
  
  const { id } = useParams();

  const [detail, setDetail] = useState({});
  const url = `https://658c2835859b3491d3f5996e.mockapi.io/Furniture/${id}`;
  
  useEffect(() => {
      axios.get(url).then(function (res) {
        setDetail(res.data);
      });
  }, [url]);

  const arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,  img16, img17, img18, img19, img20,  img21, img22, img23, img24, img25,  img26, img27, img28, img29, img30];
  
  return (
    <div>
      <Header/>
      {/* Navigation */}
      <div className="navigation">
        <h2 className="navigation-title">SHOP</h2>
        <div className="navigation-subtitle">
          <div className="navigation-subtitle-back">
            <IoHomeOutline/>
            <Link className="navigation-subtitle-link" style={{textDecoration: "none"}} to="/">Home</Link>
          </div>
          <div className="navigation-subtitle-now">
            <GoDotFill/>
            <span className="navigation-subtitle-info">{detail.name}</span>
          </div>
        </div>
      </div>
      <Container className="shop_detail">
        <Row>
          <Col className="shop_detail-img" sm={12} md={12} lg={6}>
            <img src={arr[id-1]} alt="product" width="100%" />
          </Col>
          <Col className="shop_detail-info" sm={12} md={12} lg={6}>
            <div className="shop_detail-description">
              <h1 className="shop_detail-title">{detail.name}</h1>
              <span className="shop_detail-heart"><i class="fa-solid fa-heart"></i></span>
            </div>
            <div className="shop_detail-review">
              <div className="shop_detail-icon">
                <span className="shop_detail-star"><i class="fa-solid fa-star"></i></span>
                <span className="shop_detail-star"><i class="fa-solid fa-star"></i></span>
                <span className="shop_detail-star"><i class="fa-solid fa-star"></i></span>
                <span className="shop_detail-star"><i class="fa-solid fa-star"></i></span>
                <span className="shop_detail-star"><i class="fa-solid fa-star"></i></span>
              </div>
              <span className="shop_detail-view">View all reviews</span>
            </div>
            <div className="shop_detail-price">
              <h2 className="shop_detail-old">$1000.00</h2>
              <h2 className="shop_detail-new">${detail.price}</h2>
              <span className="shop_detail-discount"> -50%</span>
            </div>
            <p className="shop_detail-text">With a delicate blend of modern and classic, this product is a masterpiece in your living room, crafted from premium leather material, with meticulous stitching and a sturdy steel frame structure, ensuring durability and comfort...</p>
            <div className="shop_detail-progress"></div>
            <p className="shop_detail-progress-info">90% Sold - Only 50 item(s) left in stock!</p>
            <div className="shop_detail-note">
              <div className="shop_detail-tags-sku-separate">
                <div className="shop_detail-tags">
                  <span className="shop_detail-tags-title">TAGS: </span>
                  <span className="shop_detail-tags-text">{detail.color}</span>
                </div>
                <div className="shop_detail-sku">
                  <span className="shop_detail-sku-title">SKU: </span>
                  <span className="shop_detail-sku-text">E-00024</span>
                </div>
              </div>
              <div className="shop_detail-category">
                <span className="shop_detail-category-title">CATEGORY: </span>
                <div className="shop_detail-category-text">
                  <Link style={{textDecoration: "none", color: "var(--text-color)"}} >
                    <span>Armchair,</span>
                  </Link>
                  <Link style={{textDecoration: "none", color: "var(--text-color)"}} >
                    <span>Table,</span>
                  </Link>
                  <Link style={{textDecoration: "none", color: "var(--text-color)"}} >
                    <span>Lamp,</span>
                  </Link>
                  <Link style={{textDecoration: "none", color: "var(--text-color)"}} >
                    <span>Sofa,</span>  
                  </Link>
                  <Link style={{textDecoration: "none", color: "var(--text-color)"}} >
                    <span>Planter,</span>
                  </Link>
                  <Link style={{textDecoration: "none", color: "var(--text-color)"}} >
                    <span>Clock,</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="shop_detail-quantity">
              <p onClick={() => addCart(detail.id)} className="shop_detail-add">ADD TO CART</p>
            </div>
            <div className="shop_detail-paypal">
              <span className="shop_detail-paypal-text">Buy with</span>
              <img src={paypal} alt="paypal" width="15%"/>
            </div>
            <div className="shop_detail-support">
              <Link style={{textDecoration: "none", color: "var(--black-color)"}} >
                <div className="shop_detail-share">
                  <span className="shop_detail-share-icon"><i class="fa-solid fa-share-nodes"></i></span>
                  <span className="shop_detail-share-text">SHARE</span>
                </div>
              </Link>
              <Link style={{textDecoration: "none", color: "var(--black-color)"}} >
                <div className="shop_detail-ask">
                  <span className="shop_detail-ask-icon"><i class="fa-solid fa-circle-question"></i></span>
                  <span className="shop_detail-ask-text">ASK A QUESTION</span>
                </div>
              </Link>
              <Link style={{textDecoration: "none", color: "var(--black-color)"}} >
                <div className="shop_detail-faq">
                  <span className="shop_detail-faq-icon"><i class="fa-solid fa-file"></i></span>
                  <span className="shop_detail-faq-text">FAQ</span>
                </div>
              </Link>
            </div>
            <div className="shop_detail-checkout">
              <p className="shop_detail-checkout-title">GUARANTEED SAFE CHECKOUT: </p>
              <img className="shop_detail-checkout-img" src={checkout} alt="paypal" width="60%"/>
            </div>         
          </Col>
        </Row>
      </Container>
      <Container style={{marginBottom: "60px"}}>
        <div className="collapse-description">
          <div className="collapse-separate" onClick={toggle1}>
            <h6 style={{ marginBottom: '0', fontWeight: "800" }}>DESCRIPTION</h6>
            <span><i class="fa-solid fa-chevron-down"></i></span>
          </div>
          <Collapse isOpen={isOpen1}>
            <Card style={{border: "none"}}>
              <CardBody style={{paddingBottom: "0", color: "#848484"}}>
              The product's design stands out with creative, refined, and simple yet elegant lines. Every detail is meticulously crafted, with careful consideration given to each cut and curve. The product is designed to serve its purpose in the most efficient manner while still maintaining its beauty and aesthetic appeal.
              </CardBody>
              <CardBody style={{paddingBottom: "0", color: "#848484"}}>
                The product often features dark or minimalist colors such as white, black, gray, or earthy tones. Patterns may be simple yet contemporary. The product can be customized according to the customer's requirements to fit specific spaces and usage needs.
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="collapse-material">
          <div className="collapse-separate" onClick={toggle2}>
            <h6 style={{ marginBottom: '0', fontWeight: "800" }}>MATERIAL</h6>
            <span><i class="fa-solid fa-chevron-down"></i></span>
          </div>
          <Collapse isOpen={isOpen2}>
            <Card style={{border: "none"}}>
              <CardBody style={{paddingBottom: "0", color: "#848484"}}>
              The product is crafted from high-quality materials and manufactured by skilled craftsmen, ensuring durability and stability during use. The product is made from premium materials such as natural wood, metal, or advanced technological materials.
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="collapse-delivery">
          <div className="collapse-separate" onClick={toggle3}>
            <h6 style={{ marginBottom: '0', fontWeight: "800" }}>DELIVERY</h6>
            <span><i class="fa-solid fa-chevron-down"></i></span>
          </div>
          <Collapse isOpen={isOpen3}>
            <Card style={{border: "none"}}>
              <CardBody style={{paddingBottom: "0", color: "#848484"}}>
                Delivery within 7 days from the date of order. Furniture is carefully packaged to ensure safety during transportation.
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="collapse-care">
          <div className="collapse-separate" onClick={toggle4}>
            <h6 style={{ marginBottom: '0', fontWeight: "800" }}>CARE</h6>
            <span><i class="fa-solid fa-chevron-down"></i></span>
          </div>
          <Collapse isOpen={isOpen4}>
            <Card style={{border: "none"}}>
              <CardBody style={{paddingBottom: "0", color: "#848484"}}>
                We use the highest quality technical fabrics available on the market and are passionate about creating timeless, lasting items. To keep your Mordern in great shape, wash it on cold and gentle cycle, do not tumble dry and hang dry immediately after washing. Do not bleach.
              </CardBody>
              <CardBody style={{paddingBottom: "0", color: "#848484"}}>
                <img className="collapse-img" alt="care" src={material} width="20%"/>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </Container>
      <Like/>
      <Email/>
      <Footer/>
    </div>
  )
}
