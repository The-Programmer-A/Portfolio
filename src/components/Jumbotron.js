import React from 'react';
import { Jumbotron as Jumbo, Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import moneyImage from '../assets/money.jpeg' //note this a dog - change this to your headshot
import colorArt from '../assets/color.png'
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
        width: 33%; /*width of your image*/
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
                <p>This is about me...</p>
            </Container>
        </Jumbo>
    </Styles >
)

