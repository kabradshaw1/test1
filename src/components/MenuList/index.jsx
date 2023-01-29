import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { headers } from '../services/menu.service';
import { useHistory } from 'react-router-dom';

export const MenuList = () => {
  const [menus, setMenus] = useState([])
  const history = useHistory();
  const countRef = useRef(0);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    retrieveAllMenus();
  }, [countRef]);
  const retrieveAllMenu = async () => {
    try{
      let response = await axios.get('/menu/', {
        header: {
          headers
        }
      });
      setMenus(response);
    } catch (err)  {
      console.error(err);
    }
  }
}