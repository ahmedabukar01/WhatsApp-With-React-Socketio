import { Container, Form, Button} from "react-bootstrap";
import { useRef } from "react";

const Login = ({onSubmitId}) => {
    const idRef = useRef();
    const onSubmitForm = (e)=>{
        e.preventDefault();

        onSubmitId(idRef.current.value);
    }
  return(
      <Container className="align-items-center d-flex" style={{height: '100vh'}}>
          <Form className="w-100" onSubmit={onSubmitForm}>
              <Form.Group>
                  <Form.Label>Enter Your ID</Form.Label>
                  <Form.Control type="text" ref={idRef} required />
              </Form.Group>
              <Button type="submit" className="me-2 mt-2">Login</Button>
              <Button variant="secondary" className="mt-2">Create New Id</Button>
          </Form>
      </Container>
  )
};

export default Login;