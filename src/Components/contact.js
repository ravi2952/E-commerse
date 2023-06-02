import React from "react";
import { FaCommentDots, FaRegComments } from "react-icons/fa";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

function contact() {
    return (
        <section id="Contact" className='bg-light'>
            <div className='my-3 py-3'>
                <h4>Comments <FaCommentDots /></h4>
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><FaRegComments /></InputGroup.Text>
                                <Form.Control
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Comments"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default contact;