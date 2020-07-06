import React, { useState } from "react";
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

.toggle_container {
    display: none;
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
  font-size: 45px;
  color: #0D4F8B;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 45px;
  color: #0D4F8B;
}

.parentContainer,
.col-4 {
    padding: 0px;
}
`;

function Main() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);

    selectDiv(selectedIndex);
  };

  const selectDiv = (i) => {
    var toggle = function (x) {
      console.log(x);
      x.style.display = "none";
    };

    var reset_T = function (x) {
      if (x.style.display === "none") {
        x.style.display = "block";
      }
    };

    //index is the contain we are toggling on
    var toogleActiveContainer = (index) => {
      var remainderC = [1, 2, 3];
      var activeC = document.getElementById(index);
      const indexremove = remainderC.indexOf(index);

      if (indexremove > -1) {
        remainderC.splice(indexremove, 1);
      }

      var a = document.getElementById(remainderC[0]);
      var b = document.getElementById(remainderC[1]);
      toggle(activeC);
      toggle(a);
      toggle(b);
      reset_T(activeC);
    };

    var parent = document.querySelectorAll(".parentContainer")[0].children;
    for (let j = 0; j < parent.length; j++) {
      var activeContainer = [];
      if (parent[j].id === "") {
        //nothing
      } else {
        activeContainer.push(parent[j].id);
      }
      if (activeContainer == i) {
        toogleActiveContainer(i + 1);
      }
    }
  };

  return (
    <Styles>
      <Row>
        <Col xs={7} className="bigBox">
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            interval={null}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=130ykYTSmxDEwRto4SnMknbOIfiuVsPMp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1aG5zei50bTbW67ZYLfKy4sIH2oYtUvu7"
                alt="Third slide"
                height="450"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1On9CwpPAUAsINR2a5atIOT4v2qT_gbtf"
                alt="Third slide"
                height="450"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col xs={4}>
          <Container className="parentContainer">
            <h3 className="projectTitle"> My Budgeting Application </h3>
            <br></br>
            <Container id="1">
              <p className="textBox">
                This is a look at the Budgeting Application I created. This
                application tracks a users outgoing and incoming expenses
                providing information of their spending habits enabling users to
                better manage their budgets. The purpose of building this
                application was to learn the fundemental skills of Javascript
                and HTML.
                <br></br>
                <br></br> There are 3 main sections to this application,
                firstly, the header which shows the user the date, available
                funds and a clear breakdown of their income against expenses.
                Directly below the header is the interface to enable users to
                intereact with the application to input their expenses and
                incomes. The second section is the listed breakdown of the users
                incomes and expenses. Each expense shows the percentage that the
                expense against the users income. Finally the doughnut chart
                shown at the bottom of the page offers visualization of the
                users spending habits.
                <br></br>
                <br></br>
                To build this application. an MVC architecture was used. This
                seperated all the major components of the application,
                abstracting the components required for calculation, display and
                their ability to communicate easily. Using this architecture
                pattern provides a simple structure enabling other programmers
                to easily understand the inner workings of the application
                therefore making it possible to be further worked on by
                contributors.
              </p>
            </Container>
            <Container id="2" className="toggle_container">
              <p className="textBox">
                This is a closer view of the list breakdown. Here you can see
                that users are able to delete unwanted or incorrect inputs from
                both the incomes and expenses.
              </p>
            </Container>
            <Container id="3" className="toggle_container">
              <p className="textBox">
                This is a closer view of the percentages shown of each expense.
                Users are able to obtain helpful information quickly to obtain a
                better understanding of their spending habits.
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

export const BudgetApplication = () => Main();
