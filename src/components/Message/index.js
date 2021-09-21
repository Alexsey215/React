import './Message.scss';
import { Col, Row } from 'react-bootstrap';
export const Message = ({author, text, id}) =>  {
    return (
        <Row className='text-primary mt-4'>
            <Col xs={2} className='text-left '>{author}</Col>
            <Col xs={8} className='text-center text-justify'>{text}</Col>
            <Col xs={2} className='text-end'>{id}</Col>
        </Row>
    );
}
