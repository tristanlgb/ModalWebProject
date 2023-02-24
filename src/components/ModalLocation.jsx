import React, { useState } from "react";
import { Modal, Button, Navbar, Nav } from "react-bootstrap";
import ModalAbout from "./ModalAbout";
import ModalHome from './ModalHome';

const ModalLocation = (props) => {
  const { show, handleClose } = props;
  const [showAbout, setShowAbout] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const handleAboutShow = () => setShowAbout(true);
  const handleAboutClose = () => setShowAbout(false);
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
              <Nav.Link onClick={handleAboutShow}>About Us</Nav.Link>
                       </Nav>
          </Navbar.Collapse>
        </Navbar>
        <h1>Location</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          magni tempora error unde vitae sunt reiciendis necessitatibus a
          assumenda, totam nulla officiis praesentium. Dignissimos, totam
          perferendis maxime quam sapiente blanditiis!
        </p>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.517418958789!2d-58.4517463847697!3d-34.58762346642246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8f3e9deab3%3A0x647ee8d7e178a008!2sChacarita%2C%20CABA!5e0!3m2!1sen!2sar!4v1645843172539!5m2!1sen!2sar"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" href="https://www.google.com">
          Exit App😢
        </Button>
      </Modal.Footer>
      <ModalAbout show={showAbout} handleClose={handleAboutClose} />
      <ModalHome show={showHome} handleClose={handleHomeClose} />
    </Modal>
  );
};

export default ModalLocation;
