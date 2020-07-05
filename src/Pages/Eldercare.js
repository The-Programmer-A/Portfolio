import React, { useState } from "react";
import { Carousel, Container, Card } from "react-bootstrap";
import { Jumbotron } from 'react-bootstrap';
import styled from "styled-components";

const Styles = styled.div`

  .house {
    display: flex;
  }

  .carouselContainer {
    width: 10px; /* you could actually just change it to 0px */
    margin-left: -100px;
  }

  .card {
    margin-left: -40px;
    margin-right: 20px;
    margin-top: 10px;
    display: flex;
    width: 100%;
    height: 150px;
  }

  .card-text {
    width: 95%;
    height: 100px;
  }

  .textContainer {
    position: relative;
    left: 75%;
    width: 40%;
  }

  .carousel {
    margin-top: 25px;
    margin-bottom: 10px;
    width: 8500%;
  }

  .carousel-indicators  {
    align-items: bottom;
    position: absolute;
  }

  .textBox  {
    padding-left: 15px;
  }

  .toggle_container {
    display: none;
  }

  .projectTitle {
    margin-top: 25px;
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


.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 35px;
  color: #0D4F8B;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 35px;
  color: #0D4F8B;
}
`;

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);


  // THIS IS THE LINK TO ENABLE VIEWING OF SHAREABLE LINK == https://drive.google.com/uc?view&id=

  return (
    <Styles>
      <div className='house'>
        <div className='carouselContainer'>
          <Carousel activeIndex={index} direction={direction} interval={null}>
            <Carousel.Item>
              <video controls width="830" height="500" autoplay>
                <source src="https://drive.google.com/uc?view&id=1502jf8Z6Br9BYeWI1Mpwe2epWfkmwgxQ"
                  type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="textContainer">
          <Container className="parentContainer">
            <h3 className='projectTitle'> Eldercare Application </h3>
            <br></br>
            <Container id='1' >
              <p className='textBox'> The Eldercare application serves the purpose of monitoring a retirement home. The application obtains information 
              from sensors within a simulated retirement home via an MQTT Broker. The application displays that information in a user friendly manner to
              a carer. The application shows the following information:
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
        </div>
      </div>
      <Card border="info" style={{ backgroundColor: '#dbe9f4' }}> 
        <Card.Body>
          <Card.Title>My Projects</Card.Title>
          <Card.Text>
                Hi, this is a quick look at the project I've done outside of
                my studies. These projects were undertaken in efforts to learn different skills and lanaguages that are not offered by the University ciriculum.
                For more information about me, click the links or take a look my Résumé!
          </Card.Text>
          <Container className='links'>
          <ul className='list'>
            <a target="_blank" href="https://github.com/The-Programmer-A"><i class="fa fa-2x fa-github"></i></a>
            <li></li>
            <a target="_blank" href="https://www.linkedin.com/in/armaan-chandra-44227b18a/"><i class="fa fa-2x fa-linkedin"></i></a>
            <li></li>
            <a href="https://drive.google.com/uc?export=download&id=12S8RqkBlKtZdRQc4A2PivPU8liGpIK4i" download="Armaan_Chandra_CV"><i class="fa fa-2x fa-file"></i></a>
            <li></li>
          </ul>
        </Container>
        </Card.Body>
      </Card>
    </Styles>
  );
}

export const Eldercare = () => (
  ControlledCarousel()
);