import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Body from "./body";
import Header from "./header";
import TopNews from "./topNews";

function Content() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <br />
      <Body /><br/>
      <TopNews />
    </Container>
  );
}

export default Content;
