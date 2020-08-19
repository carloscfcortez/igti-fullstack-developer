import React, { Fragment } from "react";
import NavHeader from "./components/NavHeader";
import { Col, Container, Row, TextInput } from "react-materialize";

function App() {
  return (
    <Fragment>
      <NavHeader />
      <Container className="fluid" style={{ flex: 1 }}>
        <Row>
          <Col>
            <TextInput id="start_value" label="Montande Inicial:" />
          </Col>

          <Col>
            <TextInput id="fee" label="Taxa de Juros mensal:" />
          </Col>

          <Col>
            <TextInput id="time" label="Periodo (meses):" />
          </Col>
        </Row>
        <Row></Row>
      </Container>
      {/* <FooterComponent /> */}
    </Fragment>
  );
}

export default App;
