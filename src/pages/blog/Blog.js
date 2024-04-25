import "../../css/base.css";
import "./blog.css";

import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

import { Link } from 'react-router-dom'

import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";

export default function Blog() {
  return (
    <div>
      <Header/>
      {/* Navigation */}
      <div className="navigation">
        <h2 className="navigation-title">BLOG</h2>
        <div className="navigation-subtitle">
          <div className="navigation-subtitle-back">
            <IoHomeOutline/>
            <Link className="navigation-subtitle-link" style={{textDecoration: "none"}} to="/">Home</Link>
          </div>
          <div className="navigation-subtitle-now">
            <GoDotFill/>
            <span className="navigation-subtitle-info">Blog</span>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <Post/>
      <Email/>
      <Footer/>
    </div>
  )
}

