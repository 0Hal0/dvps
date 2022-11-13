import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Page(){
    return (
        <div>
            <ContainerExample/>
            <div>
                <HeaderAndText/>
            </div>
        </div>
    )
}

function ContainerExample() {
  return (
    <Container className="top-container">
      <Row className="top-header">
        <Col classname="top-header-item"><img className="top-header-logo" src="/nhs-logo.png"/></Col>
        <Col className="top-header-item"><img style={{float: "left"}} src="/pods-logo.png"/><p className="top-header-title">Federated Volunteer Recruitment</p></Col>
        <Col className="top-header-login"><p className="top-header-text">Login</p></Col>
      </Row>
    </Container>
  );
}
function HeaderAndText(){
    return(
        <h1>Federated Volunteer Recruitment</h1>
    )
}

export default ContainerExample;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

