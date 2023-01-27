import axios from 'axios';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userFormData)
    
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
      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' value={userFormData.email} onChange={handleInputChange} type='text' placeholder='Enter email'/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' value={userFormData.password} onChange={handleInputChange} type='password' placeholder='Enter password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Home;