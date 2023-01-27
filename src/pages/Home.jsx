import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailInput)
    console.log(passwordInput)

    // if (!emailInput || !passwordInput) {
    //   return false;
    // }
 
    // try {
    //   await axios.post('api/user', )
    // } catch(err) {
    //   console.error(err)
    // }
  };

  return (
    <Form className='bg-secondary' onSubmit={handleSubmit}>
      <Form.Label><h3>User Form</h3></Form.Label>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='emailInput' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} type='text' placeholder='Enter email'/>
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control name='passwordInput' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} type='password' placeholder='Enter password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Home;