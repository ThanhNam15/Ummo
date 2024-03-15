import "../../css/base.css";
import "./post_detail.css";

import { Link } from "react-router-dom";
import { Container } from "reactstrap";

export default function Post_detail(props) {
  const { post, img } = props;
  
  return (
    <Container className="post_detail">
        <div className="post_detail-img">
          <img alt="furniture" src={img} width="100%"/>
        </div>
        <h6 className="post_detail-title">{post.title}</h6>
        <div className="post_detail-info">
          <div className="post_detail-date">
            <span className="post_detail-date-icon"><i class="fa-regular fa-calendar-days"></i></span>
            <span className="post_detail-date-number">{post.date}</span>
          </div>
          <div className="post_detail-user">
            <span className="post_detail-user-icon"><i class="fa-solid fa-user"></i></span>
            <span className="post_detail-user-text">{post.user}</span>
          </div>
        </div>
        <p className="post_detail-paragraph">{post.text}</p>
        <Link style={{textDecoration: "none"}} to={`/blog/${post.id}`}>
          <span className="post_detail-btn">Read More</span>
        </Link>
    </Container>
  )
}
