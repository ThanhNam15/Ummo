import "../../css/base.css";
import "./shop.css";

import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

import { Link } from 'react-router-dom';
import { Container} from 'reactstrap';

import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Tag from "../../components/tag/Tag";
import Commit from"../../components/commit/Commit";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";

export default function Shop() {
  return (
    <div>
      <Header />
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
            <span className="navigation-subtitle-info">Shop</span>
          </div>
        </div>
      </div>
      {/* Saving */}
      <Container>
        <div className="saving">
          SAVE AN ADDITIONAL 10% ON ALL CLEARANCE ITEMS
        </div>
      </Container>
      {/* Filter & Grid */}
      <Container className="category">
        <div className="filter">
          <span className="filter-text">Sort by Featured</span>
          <span className="filter-icon">
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        <div className="grid">
          <span className="grid-icon-one">
            <i class="fa-solid fa-table-cells"></i>
          </span>
          <span className="grid-icon-two">
            <i class="fa-solid fa-table-cells-large"></i>
          </span>
          <span className="grid-icon-three">
            <i class="fa-solid fa-table-list"></i>
          </span>
        </div>
      </Container>
      <Products />
      {/* Showing */}
      <div className="showing">
        <span className="showing-text">Showing <span className="showing-number">30</span> of <span className="showing-number">30</span> products</span>
      </div>
      <Tag/>
      <Commit/>
      <Email />
      <Footer />
    </div>
  );
}
