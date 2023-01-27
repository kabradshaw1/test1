import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Header(props) {
  const{ currentTab, handleTabChange } = props;

  <Container fluid>
    <Row className='align-items-center'>
      <Col>Working App Name</Col>
      <Col>
        <Nav variant='pills'>
          <Nav.Item>
            <Nav.Link>
              Option 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              Option 2
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </Container>
}

export default Header;