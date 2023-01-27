import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [emailInput, setEmailInput] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();


  }
  return (
    <Form className='bg-secondary' onSubmit={handleSubmit}>
      <Form.Label><h3>User Form</h3></Form.Label>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='emailInput' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} type='text' placeholder='Enter email'/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Home;