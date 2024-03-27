import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { MdDelete } from "react-icons/md";
import image1 from "../assets/img1.jpg";
import image10 from "../assets/img10.jpg";
import image11 from "../assets/img11.jpg";
import image12 from "../assets/img12.jpg";
import image13 from "../assets/img13.jpg";
import image14 from "../assets/img14.jpg";
import image15 from "../assets/img15.jpg";
import image16 from "../assets/img16.jpg";
import image17 from "../assets/img17.jpg";
import image18 from "../assets/img18.jpg";
import image19 from "../assets/img19.jpg";
import image2 from "../assets/img2.jpg";
import image20 from "../assets/img20.jpg";
import image21 from "../assets/img21.jpg";
import image22 from "../assets/img22.jpg";
import image23 from "../assets/img23.jpg";
import image24 from "../assets/img24.jpg";
import image25 from "../assets/img25.jpg";
import image26 from "../assets/img26.jpg";
import image27 from "../assets/img27.jpg";
import image28 from "../assets/img28.jpg";
import image29 from "../assets/img29.jpg";
import image3 from "../assets/img3.jpg";
import image30 from "../assets/img30.jpg";
import image31 from "../assets/img31.jpg";
import image32 from "../assets/img32.jpg";
import image33 from "../assets/img33.jpg";
import image34 from "../assets/img34.jpg";
import image35 from "../assets/img35.jpg";
import image36 from "../assets/img36.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import image7 from "../assets/img7.jpg";
import image8 from "../assets/img8.jpg";
import image9 from "../assets/img9.jpg";
import EditModal from "./editModal";

function Body() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="item-card">
            <Card.Img
              variant="top"
              src={image1}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Nun (2018)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Horror</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">96 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image2}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Alice in Wonderland (2010)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Adventure/Fantacy</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Walt Disney Studios/Motion Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">108 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image3}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Avatar (2009)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Fantacy/Action
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">James Cameron</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">20th Century Fox</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">162 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image4}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>
                The Lord Of The Rings:The Fellowship of the Ring (2001)
              </Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Adventure/Action</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">New Line Cinema</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image5}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Creator (2023)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Adventure/Action</span>
                </div>
                {/* <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">James Cameron</span>
                </div> */}
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    20th Century Studios
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">133 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image6}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Hangover (2009)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Fantacy/Action
                  </span>
                </div>
                {/* <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Todd Phillips</span>
                </div> */}
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">100 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image7}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Wild Life (2016)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Anime/Comedy
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Vincent Kesteloot</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Summit Entertainment
                  </span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image8}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Wonka (2023)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Comedy/Family
                  </span>
                </div>
                {/* <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Paul King</span>
                </div> */}
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">116 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image9}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Color Purple (2023)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Comedy/Musical/Family
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Blitz Bazawule</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">141 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image10}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Twilight (2008)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Romance/Fantacy</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Catherine Hardwicke</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Summit Entertainment
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">121 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image11}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Other Zoey (2023)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Comedy/Romance</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Sara Zandieh</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Country of Origin: </span>
                  <span className="item-detail-value">United States</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Brainstorm Media</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">160 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image12}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Cinderella (2021 American film)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Comedy/Fantacy/Family
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Kay Cannon</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Amazon Studios</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">114 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image13}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Cult of Chucky (2017)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Horror/Thriller</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Don Mancini</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Universal Pictures Home Entertainment
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">91 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image14}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Princess Diaries (2001)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Comedy/Romance/Family
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Garry Marshall</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Buena Vista Pictures Distribution
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">115 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image15}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Fantastic Four (2015)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Action/Sci-Fi
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Josh Trank</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Country of Origin: </span>
                  <span className="item-detail-value">United States</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">20th Century Fox</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">162 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image16}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Beauty and the Beast (2017)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Fantacy/Family
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Bill Condon</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Walt Disney Studios Motion Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">129 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image17}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Hobbit:An Unexpected Journey (2012)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Adventure/Fantacy</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Peter Jackson</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                {/* <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">162 minutes</span>
                </div> */}
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image18}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Diary of a Wimpy Kid:Rodrick Rules (2011)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Comedy/Family</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">David Bowers</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Fox 2000 Pictures</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">112 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image19}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Home Alone (1999)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Comedy/Family</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Chris Columbus</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Country of Origin: </span>
                  <span className="item-detail-value">United States</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">20th Century Fox</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">103 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image20}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Thor (2011)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Action/Fantacy</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Kenneth Branagh</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Country of Origin: </span>
                  <span className="item-detail-value">United States</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Paramount Pictures</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">114 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          {" "}
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image21}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Joker (2019)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Crime/Thriller</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Todd Phillips</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">122 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image22}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Teen Wolf (2023)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Action/Fantacy</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Russell Mulcahy</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    MTV Entertainment Studios
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">140 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image23}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Aquaman (2018)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Fantacy/Action
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">James Wan</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures/DC Entertainments
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">143 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image24}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Spider-Man:No Way Home (2021)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Fantacy/Action
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Jon Watts</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Marvel Studios</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">148 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image25}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>
                Pirates of the Caribbean:Dead Men Tell No Tales (2017)
              </Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Fantacy/Action
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Joachim Ronning</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Walt Disney Studios</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image26}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Inside Out (2015)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Anime/Comedy
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Pete Docter</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Country of Origin: </span>
                  <span className="item-detail-value">United States</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Walt Disney Studios</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">95 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image27}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Hotel Transylvania (2012) </Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Anime/Comedy
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Genndy Tartakovsky</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Sony Pictures Animation
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">91 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image28}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Little Women (2019)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Romance</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Greta Gerwig</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Sony Pictures Releasing
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">135 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image29}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Catch Me If You Can (2002)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Biography/Crime</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Steven Spielberg</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">DreamWorks Pictures</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">141 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image30}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Orphan: First Kill (2022)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Crime/Horror</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">William Brent Bell</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Country of Origin: </span>
                  <span className="item-detail-value">United States</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Paramount Pictures</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">99 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image31}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Imaginary (2024)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Horror/Mistery/Thriller
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Jeff Wadlow</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Country of Origin: </span>
                  <span className="item-detail-value">United States</span>
                </div>

                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Lionsgate</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">104 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image32}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>The Conjuring (2013)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Horror/Mistery/Thriller
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">James Wan</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>

                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">112 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image33}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Venom (2018)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Action/Adventure/Sci-Fi
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Ruben Fleischer</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Sony Pictures Releasing
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">112 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image34}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Gravity (2018)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Sci-Fi/Thriller</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Alfonso Cuarón</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">91 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image35}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>17 Again (2009)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">Comedy/Fantacy</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">Burr Steers</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">
                    Warner Bros. Pictures
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">105 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className = "item-card">
            <Card.Img
              variant="top"
              src={image36}
              className="item-feature-image"
            />
            <Card.Body>
              <Card.Title>Tangled (2010)</Card.Title>
              <Card.Text>
                <div className="item-detail">
                  <span className="item-detail-key">Genre: </span>
                  <span className="item-detail-value">
                    Adventure/Anime/Comedy
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Directed By: </span>
                  <span className="item-detail-value">
                    Nathan Greno/Byron Howard
                  </span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Language: </span>
                  <span className="item-detail-value">English</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Distributed By: </span>
                  <span className="item-detail-value">Walt Disney Studios</span>
                </div>
                <div className="item-detail">
                  <span className="item-detail-key">Running Time: </span>
                  <span className="item-detail-value">100 minutes</span>
                </div>
              </Card.Text>
              <Stack
                direction="horizontal"
                gap={3}
                className="item-button-section"
              >
                <EditModal />
                <div className="vr" />
                <Button variant="outline-danger">
                  <MdDelete /> Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Body;
