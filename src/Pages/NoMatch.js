import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
.NoMatch {
    height: 80vh;
    justify-content: center;
}
`;

function Main() {
  return ( 
   <Styles>
      <Container className="NoMatch" >
          <h2>
              Error, Page Not Found.
          </h2>
      </Container>
    </Styles>
  );
}

export const NoMatch = () => Main();
