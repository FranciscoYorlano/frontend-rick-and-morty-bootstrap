import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";

function AlertBar(props) {
    const [error, setError] = useState(props.error);

    if (error) {
        return (
            <Row className="mt-1 mb-1">
                <Col xs="10" sm="8" lg="6" className="m-auto">
                    <Alert
                        variant="danger"
                        onClose={() => setError("")}
                        dismissible
                    >
                        <p>{props.error} </p>
                    </Alert>
                </Col>
            </Row>
        );
    }
}

export default AlertBar;
