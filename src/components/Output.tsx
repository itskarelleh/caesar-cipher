import React, { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { FormDataContext } from "../context";

function Output() {

    const { encryption, resetContext } = useContext(FormDataContext);

    return (
        <>
            <Col xs={12} md={6}>
                <h1>Voila</h1>
                <h4>Your message has been encoded</h4>
            </Col>
            <Col xs={12} md={6}>
                <div id="output" dangerouslySetInnerHTML={{ __html: encryption }}></div>
                <Button onClick={resetContext}>Write a new message</Button>
            </Col>
        </>
    )
}

export default Output;