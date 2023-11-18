import { useState, useEffect } from "react";
import axios from "axios";
export default ProgramHistory;

function ProgramHistory(){
    const [programList,setProgramList]=useState();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "http://localhost:5555/programHistory"
            );
            const data = response.data;
            console.log(data);
            setProgramList(data);
          } catch (error) {
            console.error("Error:", error);
          }
        };
        fetchData();
      }, []);
    return(
        <h1>program History</h1>
    );
};