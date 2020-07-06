import React from "react";
import {
  Jumbotron as Jumbo,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import styled from "styled-components";
import moneyImage from "../assets/money.jpeg";
import colorArt from "../assets/color2.jpg";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid={true} className="jumbo">
      <Row noGutters={true} className="justify-content-md-center">
        <Col xs={3}>
          <img className="profilePicture" alt=""/>
        </Col>
        <Col xs={8}>
          <Container className="blurb" fluid={true}>
            <h5>
              About Me!<br></br>
            </h5>
            Hi im Armaan Chandra. I am currently in my honors years of Software
            Engineering at Victoria University of Wellington. My studies in
            software and technologies are a big interest and passion of mine and
            do take up a lot of time in my life. However, I manage to balance my
            degree and work with other interests of mine. In my spare time I
            live an active lifestyle, enjoying phyical activities such as
            football and running. Sports is where I gained an understanding in
            the importance of keeping company with like minded people and the
            strength in working with others towards a common goal. Furthermore,
            I enjoy learning new skills and concepts that challenge me and make
            me think differently. This interest is fueled personal studies of
            different topics both related and unrealted to Engineering.
          </Container>
        </Col>
      </Row>
    </Jumbo>
  </Styles>
);

const Styles = styled.div`
  .jumbo {
    background: url(${colorArt}) no-repeat fixed bottom;
    // background-color: #ccc;
    background-size: cover;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 20px;
    z-index: -2;
  }
  .profilePicture {
    background: url(${moneyImage}) no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 0;
  }

  .Row {
    background-color: #000;
    opacity: 0.6;
    position: abosolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .blurb {
    height: 100%;
    margin-top: 5px;
    padding-left: 4px;
    color: #ffffff;
    font-weight: 300;
  }
`;
