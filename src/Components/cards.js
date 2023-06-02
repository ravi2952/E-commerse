/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowDown } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import phone from '../Images/phone.webp';
import watch from '../Images/digiwatch1.jpg';
import buds from '../Images/buds.jpeg';
import rating from '../Images/rating.png';
import Modal from 'react-bootstrap/Modal';
import '../styles/cards.css';

function cards() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section id='Shop' className='bg-light'>
            <Container>
                <div className='text-center'>
                    <h3 className='my-3 py-3'>
                        grab your products here <FaArrowDown />
                    </h3>
                </div>
                <Row className='my-3 py-3'>
                    <Col xs gap={3}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={phone} style={{ height: '12rem', marginTop: '10px' }} />
                            <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Img src={rating} style={{ width: '8rem', height: '1rem' }} />
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Button className='mx-2 bg-dark' style={{ color: '#fff', border: 'none' }}>Add to Cart</Button>
                                    <Button className='mx-2 bg-light' onClick={handleShow} style={{ color: '#000', borderColor: '#000' }}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs gap={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={watch} style={{ height: '12rem', marginTop: '10px' }} />
                            <Card.Body>
                                <Card.Title>watch</Card.Title>
                                <Card.Img src={rating} style={{ width: '8rem', height: '1rem' }} />
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Button className='mx-2 bg-dark' style={{ color: '#fff', border: 'none' }}>Add to Cart</Button>
                                    <Button className='mx-2 bg-light' onClick={handleShow} style={{ color: '#000', borderColor: '#000' }}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs gap={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={buds} style={{ height: '12rem', marginTop: '10px' }} />
                            <Card.Body>
                                <Card.Title>bass-buds</Card.Title>
                                <Card.Img src={rating} style={{ width: '8rem', height: '1rem' }} />
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Button className='mx-2 bg-dark' style={{ color: '#fff', border: 'none' }}>Add to Cart</Button>
                                    <Button className='mx-2 bg-light' onClick={handleShow} style={{ color: '#000', borderColor: '#000' }}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='my-3 py-3'>
                    <Col xs gap={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={buds} style={{ height: '12rem', marginTop: '10px' }} />
                            <Card.Body>
                                <Card.Title>bass-buds</Card.Title>
                                <Card.Img src={rating} style={{ width: '8rem', height: '1rem' }} />
                                <Card.Text>
                                    Some quick example text to build on the card
                                </Card.Text>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Button className='mx-2 bg-dark' style={{ color: '#fff', border: 'none' }}>Add to Cart</Button>
                                    <Button className='mx-2 bg-light' onClick={handleShow} style={{ color: '#000', borderColor: '#000' }}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs gap={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={phone} style={{ height: '12rem', marginTop: '10px' }} />
                            <Card.Body>
                                <Card.Title>phone</Card.Title>
                                <Card.Img src={rating} style={{ width: '8rem', height: '1rem' }} />
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Button className='mx-2 bg-dark' style={{ color: '#fff', border: 'none' }}>Add to Cart</Button>
                                    <Button className='mx-2 bg-light' onClick={handleShow} style={{ color: '#000', borderColor: '#000' }}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs gap={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={watch} style={{ height: '12rem', }} />
                            <Card.Body>
                                <Card.Title>watch</Card.Title>
                                <Card.Img src={rating} style={{ width: '8rem', height: '1rem' }} />
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Button className='mx-2 bg-dark' style={{ color: '#fff', border: 'none' }}>Add to Cart</Button>
                                    <Button className='mx-2 bg-light' onClick={handleShow} style={{ color: '#000', borderColor: '#000' }}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Product Successful//</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </section>
    )
}
export default cards;