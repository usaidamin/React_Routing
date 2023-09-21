import MyNavbar from "../../components/MyNavbar/MyNavbar"
import AboutCss from "./about.module.css"
import { Row,Col, Image,Card } from 'react-bootstrap';
import MyImage from "../../images/image.jpeg"
const About = () => {
  return (
    <>
      <MyNavbar />
      <div className={`${AboutCss.about_background} mt-5`}>
        <Row>
          <Col md={6}>
          <div>
              <Image src={MyImage} roundedCircle className={`${AboutCss.profile_picture}`} />
          </div>
          </Col>
          <Col md={6}>
          <div className={`${AboutCss.aboutMe}`}>
              <h2>About Me</h2>
              <p>I aspect to associate myself with a professionally driven, 
                well-respected organization by pursuing a challenging, 
                responsible, dynamic and rewarding career and applying my academic knowledge, 
                expertise, skills and enthusiasm, which will assist my career development 
                and contribute effectively to the progress of the organization and the society as well.
              </p>
      <Card className={`${AboutCss.personal_info_card}`}>
      <Card.Body>
        <Card.Title>Name : Muhammad Usaid</Card.Title>
        <Card.Text>
          Age : 22
        </Card.Text>
        <Card.Text>
          Email : usaidamin21@gmail.com
        </Card.Text>
        <Card.Text>
          Location : Karachi, Pakistan
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          </Col>
          </Row>
      </div>

    </>
  )
}

export default About
