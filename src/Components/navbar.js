/* eslint-disable react-hooks/rules-of-hooks */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaSatellite, FaGoogle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Cart from './cart';

function navbar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section>
            <Navbar bg="light" expand="lg" className='shadow-lg'>
                <Container>
                    <Navbar.Brand href="#home" className='brand'><FaSatellite />ShopMart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end align-items-end'>
                        <Nav>
                            <Nav.Link href="#Home" className='a active' style={{ marginRight: '10px', fontWeight: '400' }}>Home</Nav.Link>
                            <Nav.Link href="#Shop" className='a' style={{ marginRight: '10px' }}>Shop</Nav.Link>
                            <Nav.Link href="#Offers" className='a' style={{ marginRight: '10px' }}>Offers</Nav.Link>
                            <Nav.Link href="#Contact" className='a' style={{ marginRight: '10px' }}>Contact</Nav.Link>
                            <Cart />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section >


    )
}
export default navbar;