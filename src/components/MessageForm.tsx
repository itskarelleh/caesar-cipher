import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FormDataContext } from '../context';
import Layout from './Layout';
import { Col } from 'react-bootstrap';
import { caesarCipher } from '../caesar-cipher/caesar-cipher';


function ShiftInput() {

    const { shift, decrement, increment } = useContext(FormDataContext);

    return (
        <>
        <p>2. Choose how many times the letters will shift</p>
        <Container className="d-inline-flex">
            <Row>
                <Col xs={6}>
                  <div className="d-inline-flex">
                        <Button onClick={decrement}>
                            <i className="bi bi-dash"></i>
                        </Button>
                        <Form.Control type="number" min={1} value={shift} />
                        <Button onClick={increment}>
                            <i className="bi bi-plus"></i>
                        </Button>
                    </div>
                </Col>
                <Col xs={6}>
                    <span className="d-inline-flex" style={{ width: '100%', justifyContent: "space-evenly"}}>
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
            <Col xs={12} md={6}>
                <header style={{ textAlign: "center"}}>
                    <h2 className="h2">Let's Get Started</h2>
                    <h4 className="h4">Write a message that you want encrypted</h4>
                </header>
               
            </Col>
            <Col xs={12} md={6}>
            <Form>
                <Form.Group>
                    {error && <p className='text-danger'>Textbox is empty.</p>}
                    <Form.Label>1. Write some text</Form.Label>
                    <Form.Control required as="textarea" rows={4} type="text" value={input}
                    placeholder="The brown cow has speckled spots..."
                    onChange={handleInputChange} />
                </Form.Group>
                <Form.Group>
                    <ShiftInput />
                </Form.Group>
                <Button style={{width: '100%'}} onClick={submit}> 
                    3. Encrypt
                </Button>
            </Form>
            </Col>
        </>
    )
}

export default MessageForm;

