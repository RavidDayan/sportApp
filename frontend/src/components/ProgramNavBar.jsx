import Login from "../pages/login";

export default ProgramNavBar;
function ProgramNavBar(props) {
    const changeTabFunc=props.changeTab;
    const changeTabCurrentProgram=()=>{
        changeTabFunc("CurrentProgram");
    };
    const changeTabAddNewProgram=()=>{
        changeTabFunc("AddNewProgram");
    };
    const changeTabProgramHistory=()=>{
        changeTabFunc("ProgramHistory");
    };
    return (
        <>
            <nav>
                <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <button className="nav-link active" onClick={changeTabCurrentProgram} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Current Program</button>
                    <button className="nav-link" onClick={changeTabAddNewProgram} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Add new Program</button>
                    <button className="nav-link" onClick={changeTabProgramHistory} id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">History</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0"></div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0"></div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0"></div>

            </div>
        </>
    );
};
