import {ListGroup} from 'react-bootstrap';
import { useContexts } from '../contexts/ContactsContext';

const Contact = () => {
  const {contacts} = useContexts();

  return(
      <ListGroup variant="flush">
        {contacts.map(contact=>(
          <ListGroup.Item key={contact.id}>
            {contact.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
  );
};

export default Contact;
