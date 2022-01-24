import { useState } from "react";
import {Tab, Nav} from 'react-bootstrap';
import Conversations from "./Conversations";
import Contact from './Contact';

const conversationKey = 'conversation';
const contactKey = 'contact';

const Sidebar = ({id}) => {
    const [activeKey,setActiveKey] = useState(contactKey);
    
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
       </Tab.Container>
     </div>
  )
};

export default Sidebar;
