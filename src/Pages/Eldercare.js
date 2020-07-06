import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { LinkCard } from "../components/LinkCard";
import styled from "styled-components";

const Styles = styled.div`
.carousel-item{
    height: 100%;
    width: 100%
    display: block;
    position: relative;
    padding-left: 15px;
} 

.bigBox {
    padding-left: 10px;
    margin-top: 10px;
    padding-bottom: 10px;
}
  .projectTitle {
    margin-top: 10px;
    text-align: center;
  }

  .links {
    right:0;
    width: 10%; /*width of your image*/
    position: absolute;
    top: 0; 
    bottom: 2px;
}  

.list {
    list-style-type: none;
    margin-top: 20px;
    line-height: 10px
}
`;

function Main() {
  return (
    <Styles>
      <Row>
        <Col xs={7} className="bigBox">
          <Carousel>
            <Carousel.Item>
              <video className="d-block w-100" controls autoplay>
                <source
                  src="https://drive.google.com/uc?view&id=1502jf8Z6Br9BYeWI1Mpwe2epWfkmwgxQ"
                  type="video/mp4"
                />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col xs={4}>
          <Container className="parentContainer">
            <h3 className="projectTitle"> Eldercare Application </h3>
            <br></br>
            <Container id="1">
              <p className="textBox">
                {" "}
                The Eldercare application serves the purpose of monitoring a
                retirement home. The application obtains information from
                sensors within a simulated retirement home via an MQTT Broker.
                The application displays that information in a user friendly
                manner to a carer. The application shows the following
                information:
                <br></br>
                <ul type="circle">
                  <br></br>
                  <li>Histogram View of total movement per room</li>
                  <li>Time since last movement detected</li>
                  <li>Battery status of MQTT sensors</li>
                  <li>Customaizable paitent notes</li>
                </ul>
              </p>
            </Container>
          </Container>
        </Col>
      </Row>

      <Container>
        <Row>
          <Container fluid={true}>
            <Col>
              <LinkCard />
            </Col>
          </Container>
        </Row>
      </Container>
    </Styles>
  );
}

export const Eldercare = () => Main();
