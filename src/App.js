import React, { useState } from 'react';
import ModalHome from './components/ModalHome';
import { Button } from 'react-bootstrap';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className="App">
  
      <Button variant="primary" onClick={handleModalOpen}>
        Start App
      </Button>

      <ModalHome show={showModal} handleClose={handleModalClose} />
    </div>
  );
};

export default App;
