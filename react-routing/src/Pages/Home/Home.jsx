import MyNavbar from "../../components/MyNavbar/MyNavbar"
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import HomeCss from "./home.module.css"

const Home = () => {
  return (
    <>
    <MyNavbar />
      <div className={`${HomeCss.body}`}>
      <section className={`${HomeCss.hero_section} text-center`}>
        <Container>
          <h1>Welcome to Unique Homepage</h1>
          <h3>Our Homepage Is Designed Using React, React-Bootstrap, And Bootstrap CSS</h3>
        </Container>
      </section>

      {/* Features Section */}
      <section className={`${HomeCss.features_section} mb-2`}>
        <Container>
          <h2>Features</h2>
          <br />
          <Row>
            {Array.from({ length: 9 }).map((_, index) => (
              <Col md={4} key={index}>
                <Card className={`${HomeCss.feature_card} mb-2`}>
                  <Card.Body>
                    <Card.Title>Card Title {index + 1}</Card.Title>
                    <Card.Text>
                      Write Something Here
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          &copy; 2023 Unique Homepage. All Rights Reserved.
        </Container>
      </footer>
    </div>
    </>
  )
}

export default Home
