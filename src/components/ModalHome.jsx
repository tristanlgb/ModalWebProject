import React, { useState } from 'react';
import { Modal, Button, Navbar, Nav } from 'react-bootstrap';
import ModalAbout from './ModalAbout';
import ModalLocation from './ModalLocation'

const ModalHome = (props) => {
  const { show, handleClose } = props;
  const [showAbout, setShowAbout] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const handleAboutShow = () => setShowAbout(true);
  const handleAboutClose = () => setShowAbout(false);
  const handleLocationShow = () => setShowLocation(true);
  const handleLocationClose = () => setShowLocation(false);

  return (
    <Modal show={show} onHide={handleClose} size="xl" fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Modals Navigator by ChatGPT & Tristan Lenzberg</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link onClick={handleAboutShow}>About Us</Nav.Link>
              <Nav.Link onClick={handleLocationShow}>Location</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <p>
          ChatGPT is a new concept of navigation with modals inside a website.
        </p>
        <p>
          Our website allows you to easily access various content and features through a series of
          modal dialogs that appear on top of the current page. Whether you're looking for product
          information, help and support, or just want to chat with our customer service team,
          ChatGPT makes it easy and convenient to get the information you need.
        </p>
        <p>
          With ChatGPT, you can browse and explore our site without ever leaving the page you're on.
          Our modals are designed to be quick and easy to use, so you can find what you're looking
          for with minimal effort.
        </p>
        <p>
          So why wait? Start exploring ChatGPT today and see how easy it can be to navigate a
          website with modals!
        </p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" href="https://www.google.com">
          Exit App😢
        </Button>
      </Modal.Footer>
      <ModalAbout show={showAbout} handleClose={handleAboutClose} />
      <ModalLocation show={showLocation} handleClose={handleLocationClose} />
    </Modal>
  );
};

export default ModalHome;
