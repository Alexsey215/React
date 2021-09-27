import {Col, Container, Row, Spinner, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../store/articles/actions";
import {selectArticles, selectArticlesError, selectArticlesLoading} from "../../store/articles/selectors";

export const News = () => {
    const dispatch = useDispatch();

    const error = useSelector(selectArticlesError)
    const loading  = useSelector(selectArticlesLoading)
    const articles  = useSelector(selectArticles)

    const reload = () => {
        dispatch(getArticles());
    }

    useEffect(() => {
        reload();
    }, []);
    return (
        <Container className="container-lg mt-2" fluid="md">
            <Row className="mb-2">
                <Col xs={2}>
                    <Link to="/">
                        <h4>Home page</h4>
                    </Link>
                </Col>
                <Col xs={2}>
                    <Link to="/profile">
                        <h4>Profile page</h4>
                    </Link>
                </Col>
                <Col>
                    <Link to="/chats">
                        <h4>Chats</h4>
                    </Link>
                </Col>
            </Row>
            <Row>
                <h2>News</h2>
                {error ? (
                    <div className="text-center">
                        <h4>Error: {error}</h4>
                        <Button className="w-25" onClick={reload}>Refresh</Button>
                    </div>
                ) : (
                   articles.map((art) => (
                        <article key={art.id}>
                            <h4>{art.title}</h4>
                        </article>
                   ))
                )}
                {loading && <Spinner className="m-auto" animation="border" variant="primary" />}
            </Row>
        </Container>
    )
}
