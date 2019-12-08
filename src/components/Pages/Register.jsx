import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Register = () => (
  <Container>
    
   <Row className="justify-content-md-left">

    <Col xs lg="6">
      <Col md="auto">
        <br></br>
      <h3>Create acount</h3>
          <Form>
            <Form.Group controlId="formBasicAcount">
              <Form.Label>Acount</Form.Label>
              <Form.Control type="text" placeholder="Number acount" required/>
            </Form.Group>

            <Form.Group controlId="formBasicBalance">
              <Form.Label>Balance</Form.Label>
              <Form.Control type="numeric" value="0.00" required/>
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
       </Col>
     </Col>
    </Row>
    </Container>
  )

export default Register
