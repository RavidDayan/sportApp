//imports
import { useState } from "react";
//exports
export default Programs;
//componnents
import ProgramNavBar from "../components/ProgramNavBar";
import CurrentProgram from '../components/CurrentProgram';
import AddNewProgram from '../components/AddNewProgram';
import ProgramHistory from '../components/ProgramHistory';


function Programs() {
    const [activeTab, setActiveTab] = useState("CurrentProgram");
    
    const ChangeTab = (tabName) => {
        setActiveTab(tabName);
    };
    
    // Render the appropriate component based on the activeTab
    let tabComponent;
    if (activeTab === "CurrentProgram") {
        tabComponent = <CurrentProgram />;
    } else if (activeTab === "AddNewProgram") {
        tabComponent = <AddNewProgram />;
    } else if (activeTab === "ProgramHistory") {
        tabComponent = <ProgramHistory />;
    }
    
    return (
        <>
            <ProgramNavBar changeTab={ChangeTab} />
            {tabComponent}
        </>
    );
}