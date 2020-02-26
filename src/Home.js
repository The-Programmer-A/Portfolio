import React from "react";
import { Carousel, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`

  .house {
    display: flex;
  }
  .carousel {
    margin-top: 25px;
    margin-bottom: 30px;
    width: 530px;
    height: 375px;
    
  }
  .carousel-inner {
    width: 530px;
  }

  .carousel-indicators  {
    align-items: bottom;
    position: absolute;
    top: 370;
    left: 0;
  }

  .textBox{
    padding-left: 15px;
  }

  .projectTitle {
    margin-top: 25px;
    text-align: center;
  }
`;


export const Home = () => (
  <Styles>
    <div className='house'> 
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228_960_720.jpg"
          alt="First slide"
          height="375"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"
          alt="Third slide"
          height="375" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"
          alt="Third slide"
          height="375" 
        />
      </Carousel.Item>
    </Carousel>
    <Container>
      <h3 className='projectTitle'> My Budgeting Application </h3>
      <br></br>
      <p className='textBox'> </p>
    </Container>
    </div>
  </Styles>
);
