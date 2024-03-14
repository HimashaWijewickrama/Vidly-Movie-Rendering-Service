import { Col, Row, Stack } from "react-bootstrap";

function Footer() {
  return (
    <Row>
      <Stack direction="horizontal" gap={3} className="footer-section">
        <div className="p-2 " id="footer-text">
          <Col>© 2024 VIDLY | All rights reserved. Powered by XXX</Col>
        </div>
      </Stack>
    </Row>
  );
}
export default Footer;
