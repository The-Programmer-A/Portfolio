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
    //   //dependant on the index --> toogle on the required div

    console.log('This is the index from the selected div ' + i)

    var toggle = function (x) {
      console.log(x)
      x.style.display = "none";
    };

    var reset_T = function (x) {
      if (x.style.display === "none") {
        x.style.display = "block";
      }
    }

    var toogleActiveContainer = (index) => { //index is the container we want to turn on
      var remainderC = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      var activeC = document.getElementById(index) //this is the one were tunring on
      const indexremove = remainderC.indexOf(index);

      if (indexremove > -1) {
        remainderC.splice(indexremove, 1);
      }

      var a = document.getElementById(remainderC[0])
      var b = document.getElementById(remainderC[1])
      var c = document.getElementById(remainderC[2])
      var d = document.getElementById(remainderC[3])
      var e = document.getElementById(remainderC[4])
      var f = document.getElementById(remainderC[5])
      var g = document.getElementById(remainderC[6])
      var h = document.getElementById(remainderC[7])
      toggle(activeC);
      toggle(a);
      toggle(b);
      toggle(c);
      toggle(d);
      toggle(e);
      toggle(f);
      toggle(g);
      toggle(h);
      reset_T(activeC);
    }

    var parent = document.querySelectorAll(".parentContainer")[0].children;
    for (let j = 0; j < parent.length; j++) {
      var activeContainer = []
      if (parent[j].id === "") {
        //nothing
      } else {
        activeContainer.push(parent[j].id)
      }
      if (activeContainer == i) {
        toogleActiveContainer(i + 1)
      }
    }

  }


  // THIS IS THE LINK TO ENABLE VIEWING OF SHAREABLE LINK == https://drive.google.com/uc?view&id=

  return (
    <Styles>
      <div className='house'>
        <div className='carouselContainer'>
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1G8G0mf1jnqK4H_8DkEyRwgnbFlhcQt0p"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1vv04OV7yJwYmFu0YVFO0OyCOpuSeh_Ej"
                alt="Third slide"
                height="50%"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=12RpbnpbAI5a3Asg5lBobyC9BCv4dGrzd"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1xUk_lpl_LFGjxpWC6JERYJNO65lD8L46"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1z7S5gHafJQAfjynl4txXKNpGS6sMmXm4"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1VjPBQmG3OJKjC36KyDPSTW_38reLVLHw"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1urCqiRFSUk3yKzgoMTBImy56xdSan8WG"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1o2M8keEUIrSf5jzHyfEuQzZt5K8IqQ4O"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=143mkf25gmBb2ljJUTQs_apTtVA2ScAPV"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="textContainer">
          <Container className="parentContainer">
            <h3 className='projectTitle'> My Fitness Tracker Application </h3>
            <br></br>
            <Container id='1' >
              <p className='textBox'>THIS IS 1</p>
            </Container>
            <Container id='2' className='toggle_container'>
              <p className='textBox'>THIS IS 2</p>
            </Container>
            <Container id='3' className='toggle_container'>
              <p className='textBox'>THIS IS 3</p>
            </Container>
            <Container id='4' className='toggle_container'>
              <p className='textBox'> THIS IS 4</p>
            </Container>
            <Container id='5' className='toggle_container'>
              <p className='textBox'>  THIS IS 5</p>
            </Container>
            <Container id='6' className='toggle_container'>
              <p className='textBox'> THIS IS 6</p>
            </Container>
            <Container id='7' className='toggle_container'>
              <p className='textBox'> THIS IS 7</p>
            </Container>
            <Container id='8' className='toggle_container'>
              <p className='textBox'> THIS IS 8</p>
            </Container>
            <Container id='9' className='toggle_container'>
              <p className='textBox'> THIS IS 9</p>
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

export const MyFitnessTracker = () => (
  ControlledCarousel()
);
