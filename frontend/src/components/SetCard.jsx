import RepCard from "./RepCard";
//bootstrap imports
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default SetCard;
function SetCard(props) {
  //variables
  const setTime = props.setDetails.timer;
  const setSets = props.setDetails.sets;
  const repCards = [];
  for (let i = 0; i < setSets; i++) {
    repCards.push(<RepCard key={i} time={setTime} />);
  }
  return <>{repCards}</>;
}
