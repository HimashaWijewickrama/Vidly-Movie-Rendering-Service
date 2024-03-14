import { Button, Col, Row, Stack, Card } from "react-bootstrap";
function TopNews() {
  return (
    <Row>
      <Stack direction="horizontal" gap={3} className="sub-title-section">
        <div className="p-2" id="sub-title-text">
          Top news  
        </div>
      </Stack>
      <Stack direction="horizontal" gap={3} className="title-section">
        <div className="p-2 " id="title-text">
        <Row>
        <Col>
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              // src={}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Nun (2018)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Horror</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <Button variant="primary">
                 View More
                </Button>
              </Stack>
            </Card.Body>
          </Card>
          </Col>
          </Row>
        </div>
      </Stack>
    </Row>
  );
}
export default TopNews;
