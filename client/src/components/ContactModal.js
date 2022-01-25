import {Modal, Form, Button} from 'react-bootstrap';
import { useRef } from 'react';
import {useContexts} from '../contexts/ContactsContext';

const ContactModal = ({closeModal}) => {
  const idRef = useRef(); 
  const nameRef = useRef(); 
  const { createContact } = useContexts();

  const handleSubmit = (e)=>{
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);

    closeModal();
  }
  return(
      <>
          <Modal.Header closeButton>Create Contact</Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" ref={idRef}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={nameRef}/>
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Modal.Body>
      </>
  );
};

export default ContactModal;
