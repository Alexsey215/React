import {Link} from "react-router-dom";
import {Container, Row, Col, Form} from "react-bootstrap";
import {store} from "../../store";
import {toggleCheckbox} from "../../store/profile/actions";

export const Profile = () => {
    const state = store.getState();
    console.log(state)
    const handleClick = () => {
        store.dispatch(toggleCheckbox)
    }
    return (
        <Container className="mt-2" fluid="md">
            <Row className="mb-2">
                <Col xs={2}>
                    <Link to="/">
                        <h4>Home page</h4>
                    </Link>
                </Col>
                <Col>
                    <Link to="/chats">
                        <h4>Chats</h4>
                    </Link>
                </Col>
            </Row>
            <h2>This is profile page</h2>
            <Form.Check onChange={handleClick}
            />
        </Container>

    )
}
