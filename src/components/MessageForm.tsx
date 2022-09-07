import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FormDataContext } from '../context';
import { caesarCipher } from '../caesar-cipher/caesar-cipher';
import Header from './Header';

function ShiftInput() {

    const { shift, decrement, increment } = useContext(FormDataContext);

    return (
        <>
        <p>2. Choose how many times the letters will shift</p>
        <Container className="d-inline-flex">
            <Row>
                <Col xs={6}>
                  <div className="d-inline-flex">
                        <Button variant="info" size="sm" onClick={decrement}>
                            <i className="bi bi-dash"></i>
                        </Button>
                        <Form.Control type="number" min={1} value={shift} />
                        <Button variant="info" size="sm" onClick={increment}>
                            <i className="bi bi-plus"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={6}>
                    <span className="d-inline-flex" style={{ width: '100%', justifyContent: "space-evenly", fontWeight: 700 }}>
                        <p>a</p><i className="bi bi-arrow-right"></i> <p className="text-primary">{caesarCipher("a", shift)}</p>
                    </span>
                </Col>
            </Row>
        </Container>
        </>
    )
}

function MessageForm() {
    
    const { error, input, handleInputChange, submit } = useContext(FormDataContext);

    return (
        <>
            <Col xs={12} sm={6}>
                <Header title="Let's Encrypt a Message" subtitle="Write some text" />
            </Col>
            <Col xs={12} sm={6}>
                <Form>
                    <Form.Group>
                        {error && <p className='text-danger'>Textbox is empty.</p>}
                        <Form.Label>1. Write some text</Form.Label>
                        <Form.Control required as="textarea" rows={8} type="text" value={input}
                        placeholder="The brown cow has speckled spots..."
                        onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group id="shifting-controls">
                        <ShiftInput />
                    </Form.Group>
                    <Button className="mt-3" variant="dark" style={{width: '100%'}} onClick={submit}> 
                        3. Encrypt
                    </Button>
                </Form>
            </Col>
        </>
    )
}

export default MessageForm;

