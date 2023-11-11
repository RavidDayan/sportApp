import ProgramCard from "../components/ProgramCard";
import { useState, useEffect } from "react";
import axios from "axios";
//bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//exports
export default CurrentProgram;

function CurrentProgram() {
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5555/currentProgram"
        );
        const data = response.data[0];
        setProgram(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {program && (
        <Container>
          <Row>
            <Col>
              <h1 className="programName">{program.name}</h1>
            </Col>
            <Col>
              <h2 className="programStartDate">{program.startDate}</h2>
            </Col>
            <Col>
              <h2 className="exerciseNumber">{program.record.length}</h2>
            </Col>
          </Row>
          <Row>
            <ProgramCard routine={program.routine} />
          </Row>
        </Container>
      )}
    </>
  );
}
