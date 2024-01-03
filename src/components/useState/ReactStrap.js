import React, { useState } from "react";
import { Button, Table, Label, Input, Container, Row, Col } from "reactstrap";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function ReactStrap() {
  const [show, setShow] = useState(true);
  const handle_show = () => setShow(!show);
  const [modal, setModal] = useState(true);
  const handle_toogle = () => setModal(!modal);

  return (
    <div>
      {/* Button */}
      <Container>
        <Button color="primary" onClick={handle_toogle}>Sign in</Button>
      </Container>

      {/* Modal */}
      <Modal isOpen={modal} toggle={handle_toogle}>
        <ModalHeader toggle={handle_toogle}>Modal title</ModalHeader>
        <ModalBody>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handle_toogle}>
            Sign in
          </Button>{" "}
          <Button color="danger" onClick={handle_toogle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Table */}
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

      {/* Navbar */}
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={handle_show} className="me-2" />
        <Collapse isOpen={!show} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      {/* Layout */}
      <Container>
         <Row>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
            <Col sm="6" md="4" lg="1">Layout</Col>
         </Row>
      </Container>
    </div>
  );
}
