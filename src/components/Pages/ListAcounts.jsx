import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ListAcount = () => (
<Container>
    
    <Row className="justify-content-md-left">
 
     <Col xs lg="6">
       <Col md="auto">
         <br></br>
       <h3>List Acount</h3>
       <InputGroup className="mb-3">
    <FormControl
      placeholder="Name client"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-success">Search</Button>
    </InputGroup.Append>
  </InputGroup>   
        </Col>
      </Col>
     </Row>
     </Container>
  )

export default ListAcount