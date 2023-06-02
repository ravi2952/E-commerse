/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaShoppingCart } from 'react-icons/fa';
import List from './listGroup';

function cart() {

    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant='light' onClick={() => setShow(!show)} className="me-2 position-relative ">
                <FaShoppingCart />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                </span>
            </Button>
            <Offcanvas show={show} onHide={() => setShow(!show)} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <List />
                    <div className='text-end'>
                        <Button className='my-2' onClick={() => setShow(false)} style={{ backgroundColor: '#808080', color: '#fff', border: 'none' }}>check</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default cart;