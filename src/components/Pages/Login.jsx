import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Axios from 'axios'

const authetication=e=>{
  e.preventDefault()

  const form=e.target

  const data={
    "email":form.email.value,
    "password": form.password.value
  }
  
  Axios.post('https://api-edteam.alejogs4.now.sh/login',data)
  .then(r=>console.log(r))
  .catch(e=>console.log(e))

}

const Login = () => (
  <Container>
    <Row className="justify-content-md-center">
      <h1>Iniciar Sesión</h1>      
    </Row>
    <Row className="justify-content-md-center">
      <Col xs lg="2"></Col>
      <Col md="auto">
        <Form onSubmit={authetication.bind()}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Iniciar Sessión
          </Button>
        </Form>
      </Col>
      <Col xs lg="2"></Col>
    </Row>

  </Container>
)

export default Login
