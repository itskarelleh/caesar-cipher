import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FormDataContext } from '../context';
import MessageForm from './MessageForm';
import Output from './Output';

function Layout() {
    
    const { isViewingResults } = useContext(FormDataContext);

    if(!isViewingResults) {
        return (
            <Container>
                <Row>
                    <MessageForm />
                </Row>
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                <Output />
            </Row>
        </Container>
    )
}

export default Layout;