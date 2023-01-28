import Home from './pages/Home'
import Header from './components/Header'
import { Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'

function App() {

  return (
    <>
      <Header/>
      {/* <Home/> */}
      <Container className='m-10'></Container>
    </>
  );
}

export default App;
