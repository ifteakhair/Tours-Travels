import React from 'react';
import bkash from '../assets/images/bkash.png'
import nagad from '../assets/images/Nagad.svg'
import card from '../assets/images/card.jpg'
import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <Container>
      <h1 className='text-center pt-5'>Select your Payment Method</h1>
      <div className='d-flex justify-content-center align-items-center'>
      <Row>
    
      
      
      </Row>
      <div style={{height:"300px",width:"700px",marginTop:"100px"}}>
      <Row>
        
        <Col lg="4">
        <div style={{width:"200px",height:"200px",background:"white",boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"}}>
          <Link to="/checkout" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
          <img style={{width:"70%"}} src={bkash} alt=''/>
          </Link>
          </div>
        </Col>
        <Col lg="4">
        <div style={{width:"200px",height:"200px",background:"white",boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"}}>
          <Link to="/checkout" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
          <img style={{width:"70%"}} src={nagad} alt=''/>
          </Link>
        </div>
        </Col>
        <Col lg="4">
        <div style={{width:"200px",height:"200px",background:"white",boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"}}>
          <Link to="/checkout" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
          <img style={{width:"60%"}} src={card} alt=''/>
          </Link>
        </div>
        </Col>
      </Row>
      </div>
      
      </div>
    </Container>
  );
}

export default Payment;
