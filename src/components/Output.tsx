import { useContext } from "react";
import Col from "react-bootstrap/Col";
import { FormDataContext } from "../context";
import Header from "./Header";

function Output() {

    const { encryption, resetContext } = useContext(FormDataContext);

    return (
        <>
            <Col xs={12} sm={6}>
                <span style={{ cursor: "pointer" }} 
                onClick={resetContext}>
                    <i style={{ marginRight: "10px" }}
                    className="bi bi-arrow-left text-info"></i>
                    Back to form
                </span>
                <Header title="Voila!" subtitle="Your message has been encrypted." />
                <div className="d-block d-sm-none w-100 bg-dark" style={{ height: '1px'}}></div>
            </Col>
            <Col xs={12} sm={6}>
                <div id="output" className="min-vh-35">
                    <div id="content" dangerouslySetInnerHTML={{ __html: encryption }}></div>
                </div>
            </Col>
        </>
    )
}

export default Output;