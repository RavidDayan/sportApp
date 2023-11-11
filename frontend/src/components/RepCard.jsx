import { useEffect, useState } from "react";
//bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default RepCard;

function RepCard(prop) {
  //variables
  const time = prop.time;
  const startButton = (
    <button className="btn-sm" onClick={startTime}>
      Start
    </button>
  );
  const stopButton = <button onClick={stopTime}>Stop</button>;
  const resetButton = <button onClick={resetTime}>Reset</button>;
  //states
  const [timer, setTime] = useState(time);
  const [isRunning, setRunning] = useState(false);
  const [startStopButton, setButton] = useState(startButton);
  const [progressBar, setBar] = useState(
    <div
      className="progress"
      role="progressbar"
      aria-label="timer countdown"
      aria-valuenow={timer}
      aria-valuemin="0"
      aria-valuemax={time}
    >
      <div
        className="progress-bar"
        style={{ width: `${(timer * 100) / time}%` }}
      >
        {timer}
      </div>
    </div>
  );
  //effects
  useEffect(() => {
    setBar(
      <div
        className="progress"
        role="progressbar"
        aria-label="timer countdown"
        aria-valuenow={timer}
        aria-valuemin="0"
        aria-valuemax={time}
      >
        <div
          className="progress-bar"
          style={{ width: `${(timer * 100) / time}%` }}
        >
          {timer}
        </div>
      </div>
    );
  }, [timer]);
  useEffect(() => {
    const intervalCounter = setInterval(() => {
      if (isRunning && timer > 0) {
        setTime(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalCounter);
    };
  }, [isRunning, timer]);
  //methods
  async function startTime() {
    setButton(stopButton);
    setRunning(true);
  }
  async function stopTime() {
    setRunning(false);
    setButton(startButton);
  }
  async function resetTime() {
    setRunning(false);
    setTime(time);
    setButton(startButton);
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="align-self-center" xs={3}>
          {startStopButton}
        </Col>
        <Col className="align-self-center" xs={3}>
          {resetButton}
        </Col>
        <Col className="align-self-center">{progressBar}</Col>
      </Row>
    </Container>
  );
}
