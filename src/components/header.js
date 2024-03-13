import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Stack, Button } from "react-bootstrap";
import { IoAddOutline } from "react-icons/io5";

function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="cover-poster-item">
            <img
              src="https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="vidly-cover-1"
              id="cover-poster-image"
            />
          </div>
        </Col>
      </Row>

      <br />
      <Row>
        <Stack direction="horizontal" gap={3} className="title-section">
          <div className="p-2 " id="title-text">
            Vidly
          </div>
          <div className="vr" />
          <div className="p-2">Unlock the World of Movies with Vidly!</div>
          <div className="p-2 ms-auto">
          <Button variant="outline-dark"><IoAddOutline/> Add New</Button>
          </div>
        </Stack>
      </Row>
    </Container>
  );
}
export default Header;
