import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";

export default AddNewProgram;
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5555/newProgram"
      );
      const data = response.data;
      setProgram(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  fetchData();
}, []);
function AddNewProgram() {
  return (<Container>
    
  </Container>);
}
