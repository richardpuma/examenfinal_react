import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyTransaction = () => (
<Container>
    
    <Row className="justify-content-md-left">
 
     <Col xs lg="6">
       <Col md="auto">
         <br></br>
          <h3>My Transactions</h3>
          <br></br>
           
        </Col>
      </Col>
     </Row>
     <table className="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
        <th />
      </tr>
    </thead>
    <tbody>






    </tbody>
  </table>

     </Container>
  )

export default MyTransaction