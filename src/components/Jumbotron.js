import React from 'react';
import { Jumbotron as Jumbo, Container, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import moneyImage from '../assets/money.jpeg'
import colorArt from '../assets/color.png'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CV from '../assets/Armaan_Chandra_CV.pdf';

const Styles = styled.div`
    .jumbo {
        background: url(${colorArt}) no-repeat fixed bottom;
        background-size: cover;
        text-shadow: black 0.1em 0.1em 0.1em;
        color: #efefef;
        height: 200px;
        position: relative;
        display: flex;

    }
    .card {
        background: url(${moneyImage}) no-repeat;
        background-position: left top;
        width: 250px; /*width of your image*/
        height: 200px;
        position: absolute;
        left: 0;
        top: 0; 
    }

    .fa fa-github {
        font-size: 5em;
    }

    .container1 {
        width: 33%; /*width of your image*/
        height: 200px;
        position: absolute;
        left: 250px;
        top: 0; 
    }

    .container2 {
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

`;

export const Jumbotron = () => (


    <Styles>
        <Jumbo fluid={true} className="jumbo">
            <Image fluid={true} className='card' roundedCircle />
            <Container className='container1'>
                <p>Hi, this is a quick look at the project I've done outside of
                my studies. For more information about me, click the links or take a look my Résumé</p>
            </Container>
            <Container className='container2'>
                <ul className='list'>
                    <a target="_blank" href="https://github.com/The-Programmer-A"><i class="fa fa-3x fa-github"></i></a>
                    <li></li>
                    <a target="_blank" href="https://www.linkedin.com/in/armaan-chandra-44227b18a/"><i class="fa fa-3x fa-linkedin"></i></a>
                    <li></li>
                    <a href="https://drive.google.com/uc?export=download&id=12S8RqkBlKtZdRQc4A2PivPU8liGpIK4i" download="Armaan_Chandra_CV"><i class="fa fa-3x fa-file"></i></a>
                    <li></li>
                </ul>
            </Container>
        </Jumbo>
    </Styles >
)

