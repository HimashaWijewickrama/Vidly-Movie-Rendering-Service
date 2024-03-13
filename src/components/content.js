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
        <Col>
        <Container style={{color: 'white'}}>
        Top News

        </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
