import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
    return (
        <Container className="container-lg mt-2" fluid="md">
            <Row className="mb-2">
                <Col xs={2}>
                    <Link to="/profile">
                        <h4>Profile page</h4>
                    </Link>
                </Col>
                <Col xs={2}>
                    <Link to="/chats">
                        <h4>Chats</h4>
                    </Link>
                </Col>
                <Col xs={2}>
                    <Link to="/news">
                        <h4>News</h4>
                    </Link>
                </Col>
            </Row>
            <h2>This is home page</h2>
        </Container>
    )
}
