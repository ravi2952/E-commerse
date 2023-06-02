import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function lists() {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Redmi Note-12 pro</div>
                    Cras justo odio
                </div>
                <Badge bg="primary" pill>
                    1
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start  my-2"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Watch</div>
                    Cras justo odio
                </div>
                <Badge bg="primary" pill>
                    1
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start my-2"
            >
                <div className="ms-2 me-auto ">
                    <div className="fw-bold">Earbud</div>
                    Cras justo odio
                </div>
                <Badge bg="primary" pill>
                    1
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    )
}
export default lists;