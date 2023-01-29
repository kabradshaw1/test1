// import axios from 'axios';
// import { useState } from 'react';
// import Container from 'react-bootstrap/Container'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
import CreateUser from '../components/CreateUser'
import{ useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'

export const Home = () => {
  const [users, setUsers] = useState([]);

  

  useEffect(() => {
    // retriveUser()
  })
  
  return (
    <>
      <CreateUser/>
      <Container>

      </Container>
    </>
  )
}

