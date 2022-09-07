import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FormDataContext } from '../context';
import MessageForm from './MessageForm';
import Output from './Output';

function Layout() {
    
    const { isViewingResults } = useContext(FormDataContext);

    if(!isViewingResults) {
        return (
            <Container className="h-100 d-flex align-items-center">
                <Row className="m-auto">
                    <MessageForm />
                </Row>
            </Container>
        )
    }

    return (
        <Container className="h-100 d-flex align-items-center">
            <Row className="m-auto">
                <Output />
            </Row>
        </Container>
    )
}

export default Layout;