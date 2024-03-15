import "../../css/base.css";
import "./blog_detail.css";

import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

import { useState, useEffect } from "react"; 
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'

import Header from "../../components/header/Header";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";

import axios from "axios";

import post_1 from "../../imgs/post_1.webp";
import post_2 from "../../imgs/post_2.webp";
import post_3 from "../../imgs/post_3.webp";
import post_4 from "../../imgs/post_4.webp";
import post_5 from "../../imgs/post_5.webp";

export default function Blog_detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const url = `https://658c2835859b3491d3f5996e.mockapi.io/Blog/${id}`;

  useEffect(() => {
    axios.get(url).then(function (res) {
      setData(res.data);
    });
}, []);

const arr = [ post_1, post_2, post_3, post_4, post_5];

  return (
    <div>
      <Header/>
      {/* Navigation */}
      <div className="navigation">
        <h1 className="navigation-title">BLOG</h1>
        <div className="navigation-subtitle">
          <div className="navigation-subtitle-back">
            <IoHomeOutline/>
            <Link className="navigation-subtitle-link" style={{textDecoration: "none"}} to="/">Home</Link>
          </div>
          <div className="navigation-subtitle-now">
            <GoDotFill/>
            <span className="navigation-subtitle-info">{data.user}</span>
          </div>
        </div>
      </div>
      <Container className="blog_detail">
        <div className="blog_detail-img">
          <img src={arr[id-1]} width="100%" />
        </div>
        <h6 className="blog_detail-title">{data.title}</h6>
        <p className="blog_detail-paragraph">{data.content_1}</p>
        <p className="blog_detail-paragraph">{data.content_2}</p>
        <p className="blog_detail-paragraph">{data.content_3}</p>
        <p className="blog_detail-paragraph">{data.content_4}</p>
        <p className="blog_detail-paragraph">{data.content_5}</p>
        <div className="blog_detail-date-user-share">
          <div className="blog_detail-info">
            <div className="blog_detail-date">
              <span className="blog_detail-date-icon"><i class="fa-regular fa-calendar-days"></i></span>
              <span className="blog_detail-date-number">{data.date}</span>
            </div>
            <div className="blog_detail-user">
              <span className="blog_detail-user-icon"><i class="fa-solid fa-user"></i></span>
              <span className="blog_detail-user-text">{data.user}</span>
            </div>
          </div>
          <div className="blog_detail-share">
            <span className="blog_detail-share-icon"><i class="fa-solid fa-share-nodes"></i></span>
            <span className="blog_detail-share-text">SHARE</span>
          </div>
        </div>
      </Container>
      <Container className="news">
      <h1 className="blog_detail-news-title">Related News</h1>
      <Row>
        <Col className="news-blog" sm={12} md={4} lg={4}>
          <Link className="news-img" to="/blog/">
            <img src={post_1} width="100%"/>
          </Link>
          <div className="news-blog-subtitle">
            <p className="news-blog-date">01 Sep 2024</p>
            <p className="news-blog-name">William Taylor</p>
          </div>
          <h4 className="news-blog-title">Minimalist interiors are a popular choice</h4>
          <Link style={{textDecoration: "none"}} className="news-blog-btn">
            <span className="news-blog-text">Read more</span>
            <span className="news-blog-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
          </Link>
        </Col>
        <Col className="news-blog" sm={12} md={4} lg={4}>
          <Link className="news-img" to="/blog/">
            <img src={post_2} width="100%"/>
          </Link>
          <div className="news-blog-subtitle">
            <p className="news-blog-date">23 Nov 2024</p>
            <p className="news-blog-name">David Rake</p>
          </div>
          <h4 className="news-blog-title">Arrange furniture to suit your space</h4>
          <Link style={{textDecoration: "none"}} className="news-blog-btn">
            <span className="news-blog-text">Read more</span>
            <span className="news-blog-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
          </Link>
        </Col>
        <Col className="news-blog" sm={12} md={4} lg={4}>
          <Link className="news-img" to="/blog/">
            <img src={post_3} width="100%"/>
          </Link>
          <div className="news-blog-subtitle">
            <p className="news-blog-date">15 Aug 2024</p>
            <p className="news-blog-name">John Evans</p>
          </div>
          <h4 className="news-blog-title">How to choose furniture for you</h4>
          <Link style={{textDecoration: "none"}} className="news-blog-btn">
            <span className="news-blog-text">Read more</span>
            <span className="news-blog-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
          </Link>
        </Col>
      </Row>
    </Container>
      <Email/>
      <Footer/>
    </div>
  )
}
