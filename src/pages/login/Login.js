import "../../css/base.css";
import "./login.css";

import { useState } from "react";

import { IoHomeOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { Container, Modal, ModalHeader, ModalBody } from "reactstrap";

import Header from "../../components/header/Header";

export default function Login() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Header />
      {/* Navigation */}
      <div className="navigation">
        <h1 className="navigation-title">LOGIN</h1>
        <div className="navigation-subtitle">
          <div className="navigation-subtitle-back">
            <IoHomeOutline />
            <Link
              className="navigation-subtitle-link"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="navigation-subtitle-now">
            <GoDotFill />
            <span className="navigation-subtitle-info">Account</span>
          </div>
        </div>
      </div>
      {/* Navigation */}
        <Container className="login">
          <div className="login-center">
            <h1 className="login-title">LOGIN</h1>
            <p className="login-subtitle">Fill your information : </p>
            <div className="login-info">
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
            </div>
            <div className="login-forgot">
              <span className="login-forgot-icon">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <Link style={{textDecoration: "none"}} className="login-forgot-password">
                <p style={{marginBottom: "0"}} className="login-forgot-password-text">Forgot your password ?</p>
              </Link>
            </div>
            <p className="login-register">
              If you don't have an account, please{" "}
              <Link className="login-register-link" style={{ textDecoration: "none", color: "#6aa1da", fontWeight: "600" }} to="/register/">
                Register Here
              </Link>
            </p>
            <div className="login-btn" style={{fontWeight: "600"}} onClick={toggle}>Login</div>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                <i style={{marginRight: "8px", color: "var(--secondary-color)"}} class="fa-solid fa-circle-check"></i>
                Login Success
              </ModalHeader>
              <ModalBody>Congratulation! You have successfully logged into your account</ModalBody>
            </Modal>
          </div>
        </Container>
    </div>
  );
}
