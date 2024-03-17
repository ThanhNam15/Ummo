import "../../css/base.css";
import "./news.css";

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'

import blog_1 from "../../imgs/blog_1.webp";
import blog_2 from "../../imgs/blog_2.webp";
import blog_3 from "../../imgs/blog_3.webp";

export default function News() {

  return (
    <Container className="news">
      <h1 className="news-title">Latest News</h1>
        <Row>
          <Col className="news-blog" sm={12} md={12} lg={4}>
            <Link className="news-img" to={"/blog"}>
              <img src={blog_1} alt="blog" width="100%"/>
            </Link>
            <div className="news-blog-subtitle">
              <p className="news-blog-date">01 Sep 2024</p>
              <p className="news-blog-name">William Taylor</p>
            </div>
            <h4 className="news-blog-title">Minimalist interiors are a popular choice</h4>
            <Link style={{textDecoration: "none"}} to={"/blog"} className="news-blog-btn">
              <span className="news-blog-text">Read more</span>
              <span className="news-blog-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
            </Link>
          </Col>
          <Col className="news-blog" sm={12} md={12} lg={4}>
            <Link className="news-img" to={"/blog"}>
              <img src={blog_2} alt="blog" width="100%"/>
            </Link>
            <div className="news-blog-subtitle">
              <p className="news-blog-date">23 Nov 2024</p>
              <p className="news-blog-name">Heri Lynh</p>
            </div>
            <h4 className="news-blog-title">Arrange furniture to suit your space</h4>
            <Link style={{textDecoration: "none"}} to={"/blog"} className="news-blog-btn">
              <span className="news-blog-text">Read more</span>
              <span className="news-blog-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
            </Link>
          </Col>
          <Col className="news-blog" sm={12} md={12} lg={4}>
            <Link className="news-img" to={"/blog"}>
              <img src={blog_3} alt="blog" width="100%"/>
            </Link>
            <div className="news-blog-subtitle">
              <p className="news-blog-date">15 Aug 2024</p>
              <p className="news-blog-name">John Evans</p>
            </div>
            <h4 className="news-blog-title">How to choose furniture for you</h4>
            <Link style={{textDecoration: "none"}} to={"/blog"} className="news-blog-btn">
              <span className="news-blog-text">Read more</span>
              <span className="news-blog-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
            </Link>
          </Col>
        </Row>
    </Container>
  )
}
