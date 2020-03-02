import React from 'react';
import { Jumbotron as Jumbo, Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import moneyImage from '../assets/money.jpeg' //note this a dog - change this to your headshot
import colorArt from '../assets/color1.png'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const Styles = styled.div`
    
    .jumbo {
        background: url(${colorArt});
        background-size: cover;
        text-shadow: black 0.1em 0.1em 0.1em;
        color: #efefef;
        height: 200px;
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 0;
        margin: 0;
        margin-top: 20px;
    }
    .profilePicture {
        background: url(${moneyImage}) no-repeat;
        background-position: left top;
        width: 210px; /*width of your image*/
        height: 200px;
        position: absolute;
        left: 0;
        top: 0; 
    }

    .fa fa-github {
        font-size: 5em;
    }

    .blurb {
        width: 100%; /*width of your image*/
        height: 200px;
        position: absolute;
        left: 210px;
        top: 3px; 
    }

    .links {
        right:0;
        width: 10%; /*width of your image*/
        height: 200px;
        position: absolute;
        top: 0; 
    }  

    .list {
        list-style-type: none;
        margin-top: 20px;
        line-height:200%
    }

    .signature{
        margin-right: 600px;
        background-color: f9f5f5;
        bottom: 0;
        margin:0 auto;
        margin-top:0 auto;

      }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid={true} className="jumbo">
            <Image className='profilePicture' roundedCircle />
            <Container className='blurb'>
                <h5>About Me!<br></br></h5>
                <p>Hi im Armaan Chandra. I am currently in my post graduate honors years of Software Engineering at Victoria University of Wellington. My studies and work are a big interest and passion of mine and do take up a lot of time in my life.
                    However, I manage to balance my degree and work with other interests of mine. In my spare time I live an active lifestyle, enjoying phyical activities such as football and weight-lifting. Sports is where I gained an understanding of the importance of 
                    keeping company with like minded people and the strength in working with others towards a common goal so I try to keep sports within my life. Furthermore, I enjoy learning new skills and concepts that can help me think differently and strive in the world today. This interest is
                    fueled through reading.  </p>
            </Container>
        </Jumbo>
    </Styles >
)

