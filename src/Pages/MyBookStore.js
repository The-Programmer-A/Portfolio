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
      var remainderC = [1, 2, 3, 4, 5, 6]
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
     toggle(activeC);
     toggle(a);
     toggle(b);
     toggle(c);
     toggle(d);
     toggle(e);
     reset_T(activeC);
    }

    var parent = document.querySelectorAll(".parentContainer")[0].children;
    for(let j = 0; j < parent.length; j++){
      var activeContainer = []
      if(parent[j].id === ""){
        //nothing
      }else{
        activeContainer.push(parent[j].id)
      }
      if(activeContainer == i){
        toogleActiveContainer(i + 1)
      }
    }

  }

  // THIS IS THE LINK TO ENABLE VIEWING OF SHAREABLE LINK == https://drive.google.com/uc?view&id=

  // https://drive.google.com/uc?view&id=18cxn5aGAS_6vtGgV76DDSx-x13Mi6jy_

  return (
    <Styles>
      <div className='house'>
        <div className='carouselContainer'>
          <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
            <Carousel.Item>
              <video controls width="830" height="500" autoplay>
                <source src="https://drive.google.com/uc?view&id=18cxn5aGAS_6vtGgV76DDSx-x13Mi6jy_"
                  type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1eojY3nT55B0tOd63rwP1EWx8f94I5EsR"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1mIopjth0rFSg8pEQU-TUEUv87nZuUCbv"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1o43AaLhLhvnzmVM3vxWDvbY3LTxkUegz"
                alt="Third slide"
                height="50%"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1cijQXMAcfExbEEchmbRJM2oFtEm1wjyt
                "
                alt="Third slide"
                height="50%"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src="https://drive.google.com/uc?view&id=1XY8eC2gOB2ISF-imWh_cgZLDokSfPWZ9
                "
                alt="Third slide"
                height="50%"
              />
            </Carousel.Item>
         
          </Carousel>
        </div>
        <div className="textContainer">
          <Container className="parentContainer">
            <h3 className='projectTitle'> My Bookstore Application </h3>
            <br></br>
            <Container id='1' >
              <p className='textBox'>Here is a look at my Book Store application. The purpose of this application was to learn the skills  of building secure websites and further develop my Javascript skills.
              My Bookstore application is an ECommerce webstie with a emphasis on user security achieved through the correct handling of user input/infomration. <br></br> <br></br>
              
              The applications utilizes persistent data storeage, storing user data and sensitve information in different tables. The table storing senstive information such as user passwords and payment details is salted and hashed to protect the users private infomation. 
              This is video demonstrating the key features the bookstore application.</p>
            </Container>
            <Container id='2' className='toggle_container'>
              <p className='textBox'>This is the screen shown to non logged in users. Non logged in users do not have full functionality of the application. This is a UX descision as it enables users the ability to view the site in a limited envrionment
              before signing up and creating account to unlock full functionality of the application.</p>
            </Container>
            <Container id='3' className='toggle_container'>
              <p className='textBox'>This is a view of the create account form. Each field of this form is required to be filled out to succesfully create an account. The bottom of the form shows a password stregnth meter and a checker to ensure both the entered passwords are the same. The information obtained in these forms are securly stored in both the senstive and non-senstive persistent data storeage tables. </p>
            </Container>
            <Container id='4' className='toggle_container'>
              <p className='textBox'> This is a view of the home page to a user that has access to the websites full functionality. Signed up users are able to search for books, as well as see recommended books. Books are recommended based on the books that are stored within your Cart. </p>
            </Container>
            <Container id='5' className='toggle_container'>
              <p className='textBox'>This is a view of the search page. You can see behind the popup is a list view of all the search results. Upon the user clicking on a search result, a popup is shown providing the option to add this book to your Cart or Wishlist.</p>
            </Container>
            <Container id='6' className='toggle_container'>
              <p className='textBox'> This shows that after a certain period of inactivity the user is automatically logged out of the application. This is another security features of the application, ensuring to a user that their private information is valued.  </p>
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

export const MyBookStore = () => (
  ControlledCarousel()
);
