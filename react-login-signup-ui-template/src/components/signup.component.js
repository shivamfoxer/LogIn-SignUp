import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'

const SignUpScreen = () => {
   

    return (
      <>
        <h3>Sign Up</h3>
        <Form onSubmit={'/sign-in'} >
        <Form.Group controlId='email'>
            <Form.Label>Name</Form.Label>
            <Form.Control
            type='text'
            placeholder='Enter name'
            
          ></Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>description</Form.Label>
            <Form.Control
            type='text'
            placeholder='Enter desc'
            
          ></Form.Control>
          </Form.Group>
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
  
          <Button Link to='/sign-in' type='submit' variant='primary'>
            Sign Up
          </Button>
        </Form>
        <Row className='py-3'>
          <Col>
            Already Registered?{' '}
            <Link to= '/sign-in'>
              SignIn
            </Link>
          </Col>
        </Row>
        </>
    )
  }
export default SignUpScreen