import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";

export default AddNewProgram;

function AddNewProgram() {
  const [exerciseList,setExerciseList]=useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5555/newProgram"
        );
        const data = response.data;
        setExerciseList(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  }, []);
  return (<Container>
  </Container>);
}
