import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import styled from "styled-components";
import { Jumbotron } from "./components/Jumbotron";

const Styles = styled.div`

  .house {
    display: flex;
  }

  .carouselContainer {
    width: 9px; /* you could actually just change it to 0px */
    margin-left: -120px;
  }

  .textContainer {
    position: relative;
    left: 830px;
    width: 50%;
  }

  .carousel {
    margin-top: 25px;
    margin-bottom: 10px;
    width: 730px;
  }
  .carousel-inner {
    width: 730px;
  }

  .'d-block w-100' {
   
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

  return (
    <Styles>
      <div className='house'>
        <div className='carouselContainer'>
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} data-interval="false">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228_960_720.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"
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
              <p className='textBox'> this is the 1 </p>
            </Container>
            <Container id='container2' className='toggle_container'>
              <p className='textBox'> this is the 2 </p>
            </Container>
            <Container id='container3' className='toggle_container'>
              <p className='textBox'> this is the 3 </p>
            </Container>
          </Container>
        </div>
      </div>
    </Styles>
  );
}

export const Home = () => (
  ControlledCarousel()
);
