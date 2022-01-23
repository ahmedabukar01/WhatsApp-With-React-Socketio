import { Container, Form } from "react-bootstrap";
import { useRef } from "react";

const Login = () => {
    const idRef = useRef();

  return(
      <Container className="align-items-center d-flex" style={{height: '100vh'}}>
          <Form>
              <Form.Group>
                  <Form.Label>Enter Your ID</Form.Label>
                  <Form.Control type="text" ref={idRef} required />
              </Form.Group>
          </Form>
      </Container>
  )
};

export default Login;