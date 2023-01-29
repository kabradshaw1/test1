import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { headers } from '../../services/menu.service';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton'

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
            <CloseButton ></CloseButton>
          </Alert>
        )}
      </Col>
    </Row>
  )
}

export default MenuList