import './Message.scss';
import {Col, Row} from 'react-bootstrap';
export function Message({messageAuthor, messageText, renderCurDate}) {
    return (
        <Row className='text-primary mt-4'>
            <Col xs={2} className='text-left '>{ messageAuthor}</Col>
            <Col xs={8} className='text-center text-justify'>{messageText}</Col>
            <Col xs={2} className='text-end'>{renderCurDate}</Col>
        </Row>
    );
}
