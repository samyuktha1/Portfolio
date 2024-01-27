import Carousel from "react-multi-carousel";
import { Container,Row,Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Webdev from "../assests/images/Webdev.svg"
import fullstack from "../assests/images/fullstack.png"
import database from "../assests/images/database.jpeg"
import coding from "../assests/images/coding.png"
import appdev from "../assests/images/appdev.png"
import html from "../assests/images/html.png"


export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>There are some skills I've acquired</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item web-development">
                                <img src={Webdev} alt="Image" className="icon"/>
                                <h5 className="skill-title">Web Development</h5>
                            </div>
                            <div className="item web-development">
                                <img src={fullstack} alt="Image" className="icon"/>
                                <h5 className="skill-title">Full Stack</h5>
                            </div>
                            <div className="item web-development">
                                <img src={database} alt="Image" className="icon"/>
                                <h5 className="skill-title">Adavance Database</h5>
                            </div>
                            <div className="item web-development">
                                <img src={html} alt="Image" className="icon"/>
                                <h5 className="skill-title">HTML CSS</h5>
                            </div>
                            <div className="item web-development">
                                <img src={appdev} alt="Image" className="icon"/>
                                <h5 className="skill-title">App Development</h5>
                            </div>
                            <div className="item web-development">
                                <img src={coding} alt="Image" className="icon"/>
                                <h5 className="skill-title">Java Python</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}