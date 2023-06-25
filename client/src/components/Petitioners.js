import React, { useState } from "react"
import 'boxicons'
import { useLocation, useNavigate, Link, useSearchParams } from 'react-router-dom'
import Select from "react-dropdown-select";
import './Petitioners.css'
import c1 from './img/1.jpeg'



function Petitioners() {
    const [timeline,setTimeline]=useState("");
    const modelData = {
        model:[-24.87940201346173, -0.31312116556586134, 32.22243049163183, -53.34443752776563, 0.1011806354102666, -9.215504210254933], 
        intercept: 190.5362895973916,
        mse: 2587.7748550113324
    };
    
    function predictTimeline(features){
        let timeline=modelData.intercept;
        for(let i=0;i<modelData.model.length;i++){
            timeline+=modelData.model[i]*features[i];
        }
        return timeline;
    }

    const location = useLocation()
    const options1 = [
        { label: "District Court", value: 2 },
        { label: "High Court", value: 1 },
        { label: "Supreme Court", value: 0 }
    ];


    const options2 = [
        { label: "Criminal", value: 0 },
        { label: "Civil", value: 1 },
        { label: "Family", value: 2 },
        { label: "Employment", value: 3 }
    ];


    

    const options3 = [
        { label: "Appeal", value: 1 },
        { label: "Direct", value:0 }
    ];


    const options4 = [
        { label: "Person to Person", value: 1 },
        { label: "Person to Government", value: 2 },
        { label: "Government to Government", value: 0 },
        { label: "Person to Firm", value: 3 },
        { label: "Government to Firm", value: 5 },
        { label: "Firm to Firm", value: 4 }
    ];


    const monthSet1 = [0, 1, 2, 3, 6, 7, 10];

    const options5 = [
        { label: "January", value: 0 },
        { label: "February", value: 1},
        { label: "March", value:2 },
        { label: "April", value: 3},
        { label: "May", value: 4},
        { label: "June", value: 5},
        { label: "July", value: 6},
        { label: "August", value: 7},
        { label: "September", value: 8},
        { label: "October", value: 9},
        {label: "November", value: 10},
        { label: "December",value: 11 }
    ]
    const selectedValues5 = ["one", "Two", "Three"];


    const [selectedCourtType,setSelectedCourtType]=useState([]);
    const [selectedCaseType,setSelectedCaseType]=useState([]);
    const [selectedAppealDirect,setSelectedAppealDirect]=useState([]);
    const [selectedPetitionerRespondant,setSelectedPetitionerRespondant]=useState([]);
    const [selectedMonth,setSelectedMonth]=useState([]);

    const handleSubmit = () =>{
        const courtType = selectedCourtType[0].value;
        const caseType = selectedCaseType[0].value;
        const appealDirect = selectedAppealDirect[0].value;
        const petitionerRespondant = selectedPetitionerRespondant[0].value;
        const month=monthSet1.includes(selectedMonth[0].value) ? 1 : 0;
        const backlogCases = 400;


        const features=[courtType,caseType,month,appealDirect,backlogCases,petitionerRespondant];
        const predictedTimeline = predictTimeline(features);

        setTimeline(predictedTimeline);
    };

    return (
        <div className="Petitioners">
            <div className="header">
                <h2>CourtEase</h2>
                <div className="f1"><img alt="abc" height="65%" width="3.6%" src={c1}></img></div>
                <Link className="conn1" to="/">Home</Link>
                <Link className="conn2" to="/About">About</Link>
                <Link className="conn3" to="/Contacts">Contacts</Link>
                <Link className="conn4" to="/Profile">My Profile<i className='bx bx-user-circle'></i></Link>
            </div>
            <div className="body">
                <h1>Welcome to CourtEase</h1>
                <div className="Sel1">
                    <label className="l1">Select The Type of Court</label>
                    <Select
                        options={options1}
                        // multi
                        // values={options1.filter((data) => selectedValues1.includes(data.label))}
                        onChange={(value) => setSelectedCourtType(value)}
                    />
                </div>

                <div className="Sel2">
                    <label className="l2">Select The Type Of Case</label>
                    <Select
                        options={options2}
                        onChange={(value) => setSelectedCaseType(value)}
                    />
                </div>

                <div className="Sel3">
                    <label className="l3">Appeal/Direct</label>
                    <Select
                        options={options3}
                        onChange={(value) => setSelectedAppealDirect(value)}
                    />
                </div>

                <div className="Sel4">
                    <label className="l4">Petitioner-Respondent</label>
                    <Select
                        options={options4}
                        onChange={(value) => setSelectedPetitionerRespondant(value)}
                    />
                </div>
                <div className="Sel5">
                    <label className="l5">Month</label>
                    <Select
                        options={options5}
                        onChange={(value) => setSelectedMonth(value)}
                    />
                </div>
                <div className="Sub">
                    <button className="but" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="Out">
                    <label className="l1">Expected Timeline Of The Case</label>
                    {Math.round(timeline)}
                </div>
            </div>
            <div className="footer">
                <label className="l1">Our Online Sites</label>
                <a className="b1" href="https://www.facebook.com"><i className='bx bxl-facebook-square'></i></a>
                <a className="b2" href="https://www.instagram.com"><i className='bx bxl-instagram' ></i></a>
                <a className="b3" href="https://www.linkedin.com/feed/"><i className='bx bxl-linkedin-square'></i></a>
                <a className="b4" href="https://www.linkedin.com/feed/"><i className='bx bxl-twitter'></i></a>
                <label className="l2">Head Office</label>
                <Link className="l21" to="/Region">Regional Office</Link>
                <label className="l22">New Delhi-11001</label>
                <label className="l3">Support</label>
                <Link className="l31" to="/Documentation">Documentation</Link>
                <Link className="l32" to="/Help">Help Center</Link>
                <Link className="l33" to="/API">APIs</Link>
                <label className="l4">Government Of India</label>
                <Link className="l41" to="/MyGov">My Gov</Link>
                <Link className="l42" to="/Portal">Portal of Inida</Link>
                <Link className="l43" to="/Digital">Digital India</Link>
                <Link className="l44" to="/GST">GST.gov.in</Link>
                <label className="l5">Legal</label>
                <Link className="l51" to="/Privacy">Privacy Policy</Link>
                <Link className="l52" to="/Terms">Terms</Link>
            </div>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        </div>
    )
}

export default Petitioners