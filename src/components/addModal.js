import { useState } from "react";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { IoAddOutline } from "react-icons/io5";
import image1 from "../assets/img1.jpg";

function AddModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        <IoAddOutline /> Add New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name with Released Year *</Form.Label>
              <Form.Control type="text" placeholder="Nun (2018)" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Genre *</Form.Label>
              <Form.Control type="text" placeholder="Horror" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Directed By </Form.Label>
              <Form.Control type="text" placeholder="James Cameron" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Language *</Form.Label>
              <Form.Control type="text" placeholder="English" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Country of Origin </Form.Label>
              <Form.Control type="text" placeholder="United States" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Distributed By *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Warner Bros. Pictures"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Running Time</Form.Label>
              <Form.Control type="text" placeholder="160 minutes" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
              <Form.Label>Poster of the Movie *</Form.Label>
              <br />
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={image1}
                />
                <Figure.Caption>
                  {/* Nulla vitae elit libero, a pharetra augue mollis interdum. */}
                </Figure.Caption>
              </Figure>{" "}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddModal;
