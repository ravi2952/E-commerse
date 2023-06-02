import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import first from '../Images/galaxy-buds.webp';
import second from '../Images/first.webp';
import third from '../Images/watch.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

function corousel() {
    return (
        <div className='container'>
            <Container fluid>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={8}>
                        <Carousel className='carousel'>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={first}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Samsung ear-buds pro</h3>
                                    <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={second}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>iphone 13 pro max</h3>
                                    <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={third}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>citizen watch</h3>
                                    <p className='d-none d-sm-block'>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <p className='display-5 mt-3'>Pick your greatest offers</p>
                        <p className='load text-muted'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.<br />a pharetra augue mollis interdum</p>
                    </Col>
                </Row>
            </Container >
        </div>
    );
}
export default corousel;