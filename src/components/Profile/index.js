import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {Container, Row, Col, Form} from "react-bootstrap";
import { toggleCheckbox } from "../../store/profile/actions";
import {selectCheckboxState} from "../../store/profile/selectors";

export const Profile = () => {
    //---------------Исправил-----------------
    const checkboxState = useSelector(selectCheckboxState);
    const dispatch = useDispatch();
    //----------------------------------------
    const handleClick = () => {
        dispatch(toggleCheckbox)
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
            <Form.Check onChange={handleClick}/>
            {!!checkboxState && <span>Checkbox active</span>}
        </Container>
    )
}
