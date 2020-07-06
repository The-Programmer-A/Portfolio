import React from 'react';
import { Container, Card } from "react-bootstrap";
import styled from "styled-components";

export const LinkCard = () => (
    <Styles>
        <Card className="linkedCards" border="info" style={{ backgroundColor: '#c4d8e2' }}> 
        <Card.Body>
          <Card.Title>My Projects</Card.Title>
          <Card.Text>
                Hi, this is a quick look at the project I've done outside of
                my studies. These projects were undertaken in efforts to learn different skills and lanaguages that are not offered by the University ciriculum.
                For more information about me, click the links or take a look my Résumé!
          </Card.Text>
          <Container className='links'>
          <ul className='list'>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/The-Programmer-A"><i class="fa fa-2x fa-github"></i></a>
            <li></li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/armaan-chandra-44227b18a/"><i class="fa fa-2x fa-linkedin"></i></a>
            <li></li>
            <a href="https://drive.google.com/uc?export=download&id=12S8RqkBlKtZdRQc4A2PivPU8liGpIK4i" download="Armaan_Chandra_CV"><i class="fa fa-2x fa-file"></i></a>
            <li></li>
          </ul>
        </Container>
        </Card.Body>
      </Card>
    </Styles>
);

const Styles = styled.div`

.linkedCards {
  position: relative;
}
`;