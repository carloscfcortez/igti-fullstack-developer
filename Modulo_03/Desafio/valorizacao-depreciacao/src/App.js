import React, { Fragment, useEffect, useState } from "react";
import NavHeader from "./components/NavHeader";
import { Card, Col, Container, Row, TextInput } from "react-materialize";

function App() {
  const [valueInit, setValueInit] = useState(5900);
  const [fee, setFee] = useState(0.8);
  const [time, setTime] = useState(12);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (valueInit && fee && time)
      calculateInterestCompound(valueInit, fee, time);
  }, [valueInit, fee, time]);

  const calculateInterestCompound = (valueInit, fee, time) => {
    let result = [];
    for (let index = 1; index <= time; index++) {
      const total = valueInit * Math.pow(1 + fee / 100, index);
      const income = valueInit * (Math.pow(1 + fee / 100, index) - 1);
      const tax = (Math.pow(1 + fee / 100, index) - 1) * 100;
      result.push({
        total: total.toFixed(2),
        time: index,
        income: income.toFixed(2),
        tax: tax.toFixed(2),
      });
    }

    setCards(result);
    //const result = valueInit * Math.pow(1 + fee / 100, time);
    console.log(result);
  };
  return (
    <Fragment>
      <NavHeader />
      <Container className="fluid" style={{ flex: 1 }}>
        <Row>
          <Col>
            <TextInput
              type="number"
              id="start_value"
              label="Montande Inicial:"
              defaultValue={valueInit.toString()}
              onChange={(event) => setValueInit(event.target.value)}
            />
          </Col>

          <Col>
            <TextInput
              type="number"
              id="fee"
              defaultValue={fee.toString()}
              label="Taxa de Juros mensal:"
              onChange={(event) => setFee(event.target.value)}
            />
          </Col>

          <Col>
            <TextInput
              type="number"
              defaultValue={time.toString()}
              id="time"
              label="Periodo (meses):"
              onChange={(event) => setTime(event.target.value)}
            />
          </Col>
        </Row>
        <Row>
          {cards
            ? cards?.map((item) => {
                return (
                  <Col key={item.time} s={2}>
                    <Card>
                      <Row>
                        <Col style={{ marginTop: 50, marginLeft: 10 }}>
                          <b>{item.time}</b>
                        </Col>
                        <Col>
                          <Row>
                            <b
                              className={
                                item.total > 1
                                  ? "green-text lightn-2"
                                  : "red-text lightn-2"
                              }
                            >
                              R$ {item.total}
                            </b>
                          </Row>
                          <Row>
                            <b
                              className={
                                item.income > 1
                                  ? "green-text lightn-2"
                                  : "red-text lightn-2"
                              }
                            >
                              R$ {item.income}
                            </b>
                          </Row>
                          <Row>
                            <span className="blue-text lighten-2">
                              {item.tax} %
                            </span>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
      {/* <FooterComponent /> */}
    </Fragment>
  );
}

export default App;
