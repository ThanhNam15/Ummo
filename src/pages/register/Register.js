import "../../css/base.css";
import "./register.css";

import { useState } from "react";

import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { Container, Modal, ModalHeader, ModalBody } from "reactstrap";

import Header from "../../components/header/Header";

export default function Register() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Header/>
      <div className="navigation">
        <h2 className="navigation-title">REGISTER</h2>
        <div className="navigation-subtitle">
          <div className="navigation-subtitle-back">
            <IoHomeOutline/>
            <Link className="navigation-subtitle-link" style={{textDecoration: "none"}} to="/">Home</Link>
          </div>
          <div className="navigation-subtitle-now">
            <GoDotFill/>
            <span className="navigation-subtitle-info">Account</span>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <Container className="login">
          <div className="login-center">
            <h1 className="login-title">REGISTER</h1>
            <p className="login-subtitle">Create your account : </p>
            <div className="login-info">
            <div className="login-info-first">
                <input
                  className="login-info-first-press"
                  type="text"
                  placeholder="FIRST NAME"
                />
              </div>
              <div className="login-info-last">
                <input
                  className="login-info-last-press"
                  type="text"
                  placeholder="LAST NAME"
                />
              </div>
              <div className="login-info-email">
                <input
                  className="login-info-email-press"
                  type="text"
                  placeholder="EMAIL"
                />
              </div>
              <div className="login-info-password">
                <input
                  className="login-info-password-press"
                  type="password"
                  placeholder="PASSWORD"
                />
              </div>
              <div className="login-info-password">
                <input
                  className="login-info-password-press"
                  type="password"
                  placeholder="CONFIRM PASSWORD"
                />
              </div>
            </div>
            <p className="login-register">
              If you have an account, please{" "}
              <Link className="login-register-link" style={{ textDecoration: "none", color: "#6aa1da", fontWeight: "600" }} to="/login/">
                Login Here
              </Link>
            </p>
            <div className="login-btn" style={{fontWeight: "600"}} onClick={toggle}>Register</div>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                <i style={{marginRight: "8px", color: "var(--secondary-color)"}} class="fa-solid fa-circle-check"></i>
                Create Success
              </ModalHeader>
              <ModalBody>Congratulation ! You have successfully created an account</ModalBody>
            </Modal>
          </div>
        </Container>
    </div>
  )
}
