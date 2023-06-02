/* eslint-disable react-hooks/rules-of-hooks */
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phone from '../Images/phone.webp';
import Button from 'react-bootstrap/Button';
import { FaHeart } from 'react-icons/fa';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';

function preview() {

    const [show, setShow] = useState(false);

    return (
        <section id='Offers' >
            <div className='my-3 py-3'>
                <h3>Trending offers! <FaHeart /></h3>
            </div>
            <Container>
                <Row className='m5-3 py-5'>
                    <Col md={7}>
                        <Image src={phone} style={{ height: '20rem' }} fluid ></Image>
                    </Col>
                    <Col md={5} >
                        <div >
                            <h3 className='h1' style={{ textAlign: 'start' }}>Redmi Note-12 pro + 5G</h3>
                            <p className='load text-muted ' style={{ textAlign: 'start' }}>Praesent commodo cursus magna Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button onClick={() => setShow(true)} style={{ width: '10rem', marginRight: '355px', backgroundColor: '#000', border: 'none' }} >Buy now</Button>
                        </div>
                    </Col>
                </Row>
                <ToastContainer className="position-fixed bottom-0 end-0 p-3" position='bottom-end'>
                    <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                        <Toast.Header closeButton={false}>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Alert!</strong>
                            <small>Product 1</small>
                        </Toast.Header>
                        <Toast.Body style={{ textAlign: 'start' }}>item added</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        </section>
    )
}
export default preview;