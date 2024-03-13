import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Body from "./body";
import Header from "./header";

function Content() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <br />
      <Body/>
      <Row>
        <Col>End of the page - Footer</Col>
      </Row>
    </Container>
  );
}

export default Content;
