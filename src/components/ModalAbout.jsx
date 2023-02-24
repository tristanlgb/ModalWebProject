import React, { useState } from 'react';
import { Modal, Button, Navbar, Nav} from 'react-bootstrap';
import ModalLocation from './ModalLocation';
import ModalHome from './ModalHome';


const ModalAbout = (props) => {

  const { show, handleClose } = props;

  const [showLocation, setShowLocation] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const handleLocationShow = () => setShowLocation(true);
  const handleLocationClose = () => setShowLocation(false);
  const handleHomeShow = () => setShowHome(true);
  const handleHomeClose = () => setShowHome(false);

  return (
    <Modal show={show} onHide={handleClose} size="xl" fullscreen>
      <Modal.Header>
        <Modal.Title>About Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link onClick={handleHomeShow}>Home</Nav.Link>

              <Nav.Link onClick={handleLocationShow}>Location</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <p>
          Modals have been a popular feature of web design for many years. They allow website
          designers to create pop-up windows that appear on top of the current page, providing
          additional information or functionality without requiring the user to navigate away from
          the current page.
        </p>
        <p>
          Over the years, modals have evolved to become more sophisticated and feature-rich. Today,
          they are a common feature of many websites, providing users with a convenient way to
          access important information and features without interrupting their browsing experience.
        </p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" href="https://www.google.com">
          Exit App😢
        </Button>
      </Modal.Footer>
 
      <ModalLocation show={showLocation} handleClose={handleLocationClose} />
      <ModalHome show={showHome} handleClose={handleHomeClose} />
    </Modal>
  );
};

export default ModalAbout;
