import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Body from "./body";
import Footer from "./footer";
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
      <Body />
      <br />
      <Footer />
    </Container>
  );
}

export default Content;
