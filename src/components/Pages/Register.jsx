import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = () => (
    <div>
      <h1>Create acount</h1>
      
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Acount</Form.Label>
        <Form.Control type="email" placeholder="Acount" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Balance</Form.Label>
        <Form.Control type="password" placeholder="Balance" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>

    </div>
    

  )

export default Register
