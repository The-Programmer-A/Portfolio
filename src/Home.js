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
`;

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);

    selectDiv(selectedIndex)
  };

  const selectDiv = (i) => {
    //dependant on the index --> toogle on the required div

    console.log('This is the index from the selected div ' + i)

    var toggle = function (x) {
      x.style.display = "none";
    };

    var reset_T = function (x) {
      if (x.style.display === "none") {
        x.style.display = "block";
      }
    }


    if (i === 0) {
      //turn on textBox1, turn off textBox2 & 3
      var x = document.getElementById('container1')
      var y = document.getElementById('container2')
      var z = document.getElementById('container3')
      reset_T(x);
      reset_T(y);
      reset_T(z);
      toggle(y);
      toggle(z);

    }

    if (i === 1) {
      //turn on textBox2, turn off textBox1 & 3
      var x = document.getElementById('container1')
      var y = document.getElementById('container2')
      var z = document.getElementById('container3')
      toggle(y);
      reset_T(x);
      reset_T(y);
      reset_T(z);
      toggle(x);
      toggle(z);

    }
    if (i === 2) {
      //turn on textBox3, turn off textBox1 & 2
      var x = document.getElementById('container1')
      var y = document.getElementById('container2')
      var z = document.getElementById('container3')
      reset_T(x);
      reset_T(y);
      reset_T(z);
      toggle(x);
      toggle(y);
    }

  }

  // THIS IS THE LINK TO ENABLE VIEWING OF SHAREABLE LINK == https://drive.google.com/uc?view&id=

  return (
    <Styles>
      <div className='house'>
        <div className='carouselContainer'>
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} data-interval="false">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=130ykYTSmxDEwRto4SnMknbOIfiuVsPMp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1aG5zei50bTbW67ZYLfKy4sIH2oYtUvu7"
                alt="Third slide"
                height="50%"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1On9CwpPAUAsINR2a5atIOT4v2qT_gbtf"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="textContainer">
          <Container>
            <h3 className='projectTitle'> My Budgeting Application </h3>
            <br></br>
            <Container id='container1' >
              <p className='textBox'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
            </Container>
            <Container id='container2' className='toggle_container'>
              <p className='textBox'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsusalkdjfa;slkdjumour and the like). </p>
            </Container>
            <Container id='container3' className='toggle_container'>
              <p className='textBox'> It is a long established fact that a reader will be distracted bfdjslfjkg lskdjf lgkem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
            </Container>
          </Container>
        </div>
      </div>
      <Card border="info" style={{ width: '100%' }}> 
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

export const Home = () => (
  ControlledCarousel()
);
