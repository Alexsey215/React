import {Link} from "react-router-dom";
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {db} from "../../services/firebase";
import {onValue, ref, set} from "@firebase/database";

export const Profile = ({onLogout}) => {
    const [value, setValue] = useState("");
    const [name, setName] = useState("");

    const handleClick = () => {
        onLogout();
    }

    useEffect(() => {
        const userDbRef = ref(db, "user");
        onValue(userDbRef, (snapshot) => {
            const data = snapshot.val();
            setName(data?.username || '');
        });
        return () => {
            setName("");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue("");
        set(ref(db, "user"), {
            username: value,
        });

    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Container className="mt-2" fluid="md">
            <Row className="mb-2">
                <Col xs={2}>
                    <Link to="/chats">
                        <h4>Chats</h4>
                    </Link>
                </Col>
                <Col>
                    <Link to="/news">
                        <h4>News</h4>
                    </Link>
                </Col>
            </Row>
            <h2>This is profile page</h2>
            <Form className="d-flex w-25 mb-1" onSubmit={handleSubmit}>
                <Form.Control type="text" value={value} onChange={handleChange} />
                <Button type="submit">Submit</Button>
            </Form>
            <h4>{name}</h4>
            <Button onClick={handleClick}>Logout</Button>
        </Container>
    )
}

