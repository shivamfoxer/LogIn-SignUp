import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
const LoginScreen = () => {
   
    return (
      <>
        <h1>Sign In</h1>
        <Form onSubmit={'/sign-up'} >
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
            type='email'
            placeholder='Enter email'
            
          ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
            type='password'
            placeholder='Enter password'
            
          ></Form.Control>
          </Form.Group>
  
          <Button type='submit' variant='dark' >
           
           Sign In
               
        
          </Button>
        </Form>
  
        <Row className='py-3'>
          <Col>
            New Customer?{' '}
            <Link to= '/sign-up'>
              Register
            </Link>
          </Col>
        </Row>
        </>
    )
  }
  
  export default LoginScreen