import { useState } from "react";
import {Tab, Nav, Button, Modal} from 'react-bootstrap';
import Conversations from "./Conversations";
import Contact from './Contact';
import ConversationModal from "./ConversationModal";
import ContactModal from "./ContactModal";

const conversationKey = 'conversation';
const contactKey = 'contact';

const Sidebar = ({id}) => {
    const [activeKey,setActiveKey] = useState(contactKey);
    const [modal, setModal] = useState(false);
    const conversationOpen = activeKey === conversationKey;

    const openModal = ()=>{
        setModal(true);
    }
    const closeModal = ()=>{
        setModal(false);
    }
    
  return (
     <div style={{width: '250px'}} className="d-flex flex-column">
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav variant="tabs" className="justify-content-center">
              <Nav.Item>
                  <Nav.Link eventKey={conversationKey}>Conversation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey={contactKey}>Contact</Nav.Link>
              </Nav.Item>
          </Nav>
          <Tab.Content className="border-end overflow-auto flex-grow-1">
              <Tab.Pane eventKey={conversationKey}>
                  <Conversations />
              </Tab.Pane>
              <Tab.Pane eventKey={contactKey}>
                  <Contact />
              </Tab.Pane>
          </Tab.Content>
          <div className="p-2 border-top border-end small">
              Your id: <span>{id}</span>
          </div>
          <Button onClick={openModal} className="rounded-0">
              New {activeKey}
          </Button>
       </Tab.Container>

       <Modal show={modal} onHide={closeModal}>
           {conversationOpen ? <ConversationModal closeModal={closeModal}/> : 
           <ContactModal closeModal={closeModal}/>}
       </Modal>
     </div>
  )
};

export default Sidebar;
