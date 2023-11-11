import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default ProgramNavBar;
function ProgramNavBar(props) {
    const [pageName,updatePageName]=useState();
    const [activePage,updateActivePage]=useState();
    return (
        <>
        <Navbar fixed="top" bg="primary">
        <Navbar.Brand>Navbar</Navbar.Brand>
        </Navbar>
        <Navbar fixed="bottom" bg="primary">
        <Nav activeKey="http://localhost:5173/currentProgram">
          <Nav.Item>
            <Nav.Link href="http://localhost:5173/currentProgram">Current program</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="http://localhost:5173/newProgram">New Program</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="http://localhost:5173/programHistory">History</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      </>
    );
};
