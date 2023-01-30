import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import MenuList from './components/MenuList';
import UpdateMenu from './components/UpdateMenu';
import {AddMenu} from './components/AddMenu';
import CreateUser from './components/CreateUser'


function App() {

  return (
    <>
      <Header/>
   
      <Container className='m-10'>
        <CreateUser/>
        <Routes>
          {/* <Route exact path={['/', '/menu']} component={MenuList}/> */}
          <Route exact path="/add/" component={AddMenu} />
          {/* <Route path="/menu/:id/update/" component={UpdateMenu} /> */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
