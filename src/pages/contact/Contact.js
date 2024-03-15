import "../../css/base.css";
import "./contact.css";

import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

import { Link } from 'react-router-dom'

import Header from "../../components/header/Header";
import Contact_detail from "../../components/contact_detail/Contact_detail";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";

export default function Contact() {
  return (
    <div>
      <Header/>
      {/* Navigation */}
      <div className="navigation">
        <h1 className="navigation-title">CONTACT</h1>
        <div className="navigation-subtitle">
          <div className="navigation-subtitle-back">
            <IoHomeOutline/>
            <Link className="navigation-subtitle-link" style={{textDecoration: "none"}} to="/">Home</Link>
          </div>
          <div className="navigation-subtitle-now">
            <GoDotFill/>
            <span className="navigation-subtitle-info">Contact</span>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <Contact_detail/>
      <Email/>
      <Footer/>
    </div>
  )
}
