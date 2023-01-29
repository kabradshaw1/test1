import Home from './pages/Home'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import UserList from './components/UserList'
import CreateUser from './components/CreateUser';

function App() {

  return (
    <>
      <Header/>
      {/* <Home/> */}
      <Container className='m-10'>
        <Routes>
          {/* <Route exact path={['/', '/users']} component={UserList}/> */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
