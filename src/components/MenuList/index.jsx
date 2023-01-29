import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { headers } from '../../services/menu.service';
import { useNavigate } from 'react-router-dom';
import {Row, Col, Card, Alert, CloseButton, ButtonGroup, Button} from 'react-bootstrap';

const MenuList = () => {
  const [menus, setMenus] = useState([])
  const history = useNavigate();
  const countRef = useRef(0);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    retrieveAllMenus();
  }, [countRef]);
  const retrieveAllMenus = async () => {
    try{
      let response = await axios.get('/api/menu/', {
        header: {
          headers
        }
      });
      setMenus(response);
    } catch (err)  {
      console.error(err);
    }
  }
  // This function and the one above are different methods of doing similar things.
  const deleteMenu =(id) => {
    axios
      .delete(`/api/menu/${id}`, {
        headers: {
          headers
        }
      })
      .then((response) =>{
        setDeleted(true);
        retrieveAllMenus();
      })
      .catch((e) => {
        console.error(e);
      })
  }
  const handleUpdateClick = (id) => {
    
  }

  return (
    <Row className='justify-content-center'>
      <Col>
        {deleted && (
          <Alert className='alert alert-danger alert-dismissible fade show'>
            Menu deleted!
            <CloseButton data-dismiss="alert">
              <span aria-hidden='true'>&times;</span>
            </CloseButton>
          </Alert>
        )}
        { menus && 
          menus.map((menu, index) => {
            <Card className='my-3 w-25 mx-auto'>
              <Card.Body>
                <Card.Title className='font-weight-bold'>{menu.name}</Card.Title>
                <Card.Subtitle className='mb-2'>{menu.price}</Card.Subtitle>
                <Card.Text>{menu.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <ButtonGroup className='justify-content-around w-75 mb-1'>
                  <span>
                    <Button className='btn-info' onClick={() => handleUpdateClick(menu.id)}>Update</Button>
                  </span>
                  <span>
                    <Button className='btn-info' onClick={() => deleteMenu(menu.id)}>Delete</Button>
                  </span>
                </ButtonGroup>
              </Card.Footer>
            </Card>
          })
        }
      </Col>
    </Row>
  )
}

export default MenuList