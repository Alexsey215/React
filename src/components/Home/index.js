import {useState} from "react"
import {Link} from "react-router-dom";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

export const Home = ({onLogin, onSignUp}) => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const handlePassChange = (e) => {
        setPass(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLogin("");
        setPass("");

        if (!!onLogin) {
            onLogin(login, pass);
        } else {
            onSignUp(login, pass);
        }
    };
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
            <h3>{!!onLogin ? 'Login' : 'SignUp'}</h3>
            <Form onSubmit={handleSubmit} className="w-50 d-grid gap-1">
                <Form.Control placeholder="login" type="text" value={login} onChange={handleLoginChange}/>
                <Form.Control placeholder="password" type="password" value={pass} onChange={handlePassChange}/>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}
