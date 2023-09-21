import MyNavbar from "../../components/MyNavbar/MyNavbar"
import ContactCss from "./contact.module.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
    <MyNavbar />
    <Container className={`${ContactCss.contact_container}`}>
      <Row>
        <Col md={6} className={``}>
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName" className={`mt-3`}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className={`mt-3`}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className={`mt-3`}>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>
            <Button variant="primary" type="submit" className={`mt-3`}>
              Send
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className={`${ContactCss.contact_info}`}>
            <h3>Contact Information</h3>
            <p>Location : A-28, Block 13-A Gulshan-e_Iqbal</p>
            <p>Karachi, Pakistan</p>
            <p>Email: usaidamin21@gmail.com</p>
            <p>Phone: 0324-2069379</p>
          </div>
        </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default Contact
