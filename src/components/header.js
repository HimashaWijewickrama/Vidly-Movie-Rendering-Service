import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { IoAddOutline } from "react-icons/io5";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Container>
      <Row>
        <Stack direction="horizontal" gap={3} className="title-section">
          <img src={logo} alt="VIDLY-LOGO" className="title-logo" />
          <div className="p-2 " id="title-text">
            Vidly
          </div>
          <div className="p-2" id="title-sub-text">
            Unlock the World of Movies with Vidly!
          </div>
          <div className="p-2 ms-auto">
            <Button variant="outline-dark">
              <IoAddOutline /> Add New
            </Button>
          </div>
        </Stack>
      </Row>
    </Container>
  );
}
export default Header;
