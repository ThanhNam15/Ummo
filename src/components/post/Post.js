import "../../css/base.css";
import "./post.css";

import { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';

import axios from 'axios'

import Post_detail from "../post_detail/Post_detail";

import post_1 from "../../imgs/post_1.webp";
import post_2 from "../../imgs/post_2.webp";
import post_3 from "../../imgs/post_3.webp";
import post_4 from "../../imgs/post_4.webp";
import post_5 from "../../imgs/post_5.webp";

export default function Post() {
  const [data, setData] = useState([]);
  const url = "https://658c2835859b3491d3f5996e.mockapi.io/Blog";
  
  useEffect(() => {
      axios.get(url).then(function (res) {
        setData(res.data);
      });
  }, []);

  const arr = [ post_1, post_2, post_3, post_4, post_5];


  return (
    <div>
      <Container>
        <Row>
          {data.map((item, index) => (
            <Post_detail key={index} post={item} img={arr[index]} />
          ))}
        </Row>
      </Container>
    </div>
  )
}
