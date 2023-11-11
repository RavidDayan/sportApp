import { useEffect } from "react";
import SetCard from "./SetCard";
import Accordion from "react-bootstrap/Accordion";

export default ProgramCard;

function ProgramCard(props) {
  const sets = props.routine;
  const AccordionData = sets.map((set, index) => {
    return (
      <Accordion.Item eventKey={index} key={index}>
        <Accordion.Header>{set.exercise.name} {set.sets}X{set.reps}</Accordion.Header>
        <Accordion.Body>
          <SetCard setDetails={set} />
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return <Accordion defaultActiveKey="0">{AccordionData}</Accordion>;
}
