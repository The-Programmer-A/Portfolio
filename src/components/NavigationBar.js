import React from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #f9f5f5;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #222;
        &:hover{
            color: #128300;
        }
    }
`;
export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand> Armaan Chandra </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href='/budget'>Budgeting Application</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href='/bookstore'>BookStore Application</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link href='/fitnesstracker'>Fitness Tracker Application</Nav.Link> </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)