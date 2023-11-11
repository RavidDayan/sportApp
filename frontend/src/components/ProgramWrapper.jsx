//imports
import { useState } from "react";
import ProgramNavBar from "./ProgramNavBar";
//exports
export default Programs;
//componnents

function Programs(props) {
  const page = props.wrapped;

  return (
    <>
      <ProgramNavBar />
      <div className="pt-5 ">{page}</div>
    </>
  );
}
