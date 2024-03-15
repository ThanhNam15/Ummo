import "../../css/base.css";
import "./header.css";

import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useEffect, useRef, useState } from 'react';
import { Container, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { AppContext } from "../../AppContext";

import logo from "../../imgs/logo.png";

export default function Header() {
  const [modal, setModal] = useState(false);
  const toggle_search = () => setModal(!modal);

  const { cart } = useContext(AppContext)
  const sidebarRef = useRef()

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    sidebarRef.current.classList.toggle("active");
    // setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        sidebarRef.current.classList.remove("active");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="header fixed-top">
    <Container>
      <Navbar expand="md">
        <NavbarBrand href='/'><img src={logo} alt="logo" width="100px"/></NavbarBrand>
        <NavbarToggler className="header_toggle" onClick={toggle}><AiOutlineMenu color="var(--black-color)" /></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="mx-3">
              <Link className="header_text" style={{fontWeight: "600"}} href='/'>HOME</Link>
            </NavItem>
            <NavItem className="mx-3">
              <NavLink className="header_text" style={{fontWeight: "600"}} href='/shop'>SHOP</NavLink>
            </NavItem>
            <NavItem className="mx-3">
              <NavLink className="header_text" style={{fontWeight: "600"}} href='/contact'>CONTACT</NavLink>
            </NavItem>
            <NavItem className="mx-3">
              <NavLink className="header_text" style={{fontWeight: "600"}} href='/blog'>BLOG</NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem className="header_icon">
              <NavLink className="header_icon-user">
                <Link className="header_icon-user-link" style={{color: "var(--black-color)"}} to={"/login"}>
                  <i class="fa-regular fa-user"></i>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="header_icon">
              <NavLink className="header_icon-search" onClick={toggle_search}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </NavLink>
              <Modal isOpen={modal} toggle={toggle_search}>
                <ModalHeader toggle={toggle_search} style={{border: "none", paddingBottom: "0"}}>Find Your Furniture</ModalHeader>
                <ModalBody>
                  <div className="header_modal-search">
                    <input className="header_modal-search-input" placeholder="Search . . ." type="text"/>
                  </div>
                </ModalBody>
              </Modal>
            </NavItem>
            <NavItem className="header_icon">
              <NavLink className="header_icon-cart">
                <Link className="header_icon-cart-link" style={{textDecoration: "none", color: "var(--black-color)"}} to={"/cart"}>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span className="header_icon-cart-number">{cart.length}</span>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
    <div className="sidebar" ref={sidebarRef}>
      <div className="sidebar-intro">
        <div className="sidebar-logo">
          <Link to="/"><img src={logo} alt="logo" width="100px"/></Link>
        </div>
        <div className="sidebar-search">
          <input className="sidebar-search-press" type="text" placeholder="Search . . ."/>
        </div>
        <div className="sidebar-cart">
          <Link className="sidebar-cart-press" style={{textDecoration: "none", color: "var(--white-color)"}} to={"/cart"}>
            <p style={{marginBottom: "0", fontSize: "1rem"}}>Shopping cart</p>
          </Link>
        </div>
        <div className="sidebar-user">
          <Link className="sidebar-user-login" style={{textDecoration: "none", color: "var(--white-color)"}} to={"/login"}>
            <p style={{marginBottom: "0", fontSize: "1rem"}}>Sign in</p>
          </Link>
        </div>
      </div>
      <div className="sidebar-header">
        <ul className="sidebar-menu">
            <li className="sidebar-title">
              <Link className="sidebar-title-link" style={{textDecoration: "none", color: "var(--white-color)"}} to="/">
                <span>HOME</span>
                <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </li>
            <li className="sidebar-title">
              <Link className="sidebar-title-link" style={{textDecoration: "none", color: "var(--white-color)"}} to="/shop/">
                <span>SHOP</span>
                <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </li> 
            <li className="sidebar-title">
              <Link className="sidebar-title-link" style={{textDecoration: "none", color: "var(--white-color)"}} to="/contact/">
                <span>CONTACT</span>
                <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </li>
            <li className="sidebar-title">
              <Link className="sidebar-title-link" style={{textDecoration: "none", color: "var(--white-color)"}} to="/blog/">
                <span>BLOG</span>
                <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </li>
        </ul>
      </div>
    </div>
  </div>
  );
}
