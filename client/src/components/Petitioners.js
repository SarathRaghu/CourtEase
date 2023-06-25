import React from "react"
import 'boxicons'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import Select from "react-dropdown-select";
import './Petitioners.css'
import c1 from './img/1.jpeg'

function Petitioners() {
    const location = useLocation()
    const options1 = [
        { label: "District Court", value: "District Court" },
        { label: "High Court", value: "High Court" },
        { label: "Supreme Court", value: "Supreme Court" }
    ];

    const selectedValues1 = ["one", "Two", "Three"];

    const options2 = [
        { label: "Criminal", value: "Criminal" },
        { label: "Civil", value: "Civil" },
        { label: "Family", value: "Family" },
        { label: "Employment", value: "Employment" }
    ];

    const selectedValues2 = ["one", "Two", "Three"];

    const options3 = [
        { label: "Appeal", value: "Appeal" },
        { label: "Direct", value: "Direct" }
    ];

    const selectedValues3 = ["one", "Two", "Three"];

    const options4 = [
        { label: "Person to Person", value: "Person to Person" },
        { label: "Person to Government", value: "Person to Government" },
        { label: "Government to Government", value: "Government to Government" },
        { label: "Person to Firm", value: "Person to Firm" },
        { label: "Government to Firm", value: "Government to Firm" },
        { label: "Firm to Firm", value: "Firm to Firm" }
    ];

    const selectedValues4 = ["one", "Two", "Three"];

    return (
        <div className="Petitioners">
            <div className="header">
                <h2>CourtEase</h2>
                <div className="f1"><img alt="abc" height="65%" width="3.6%" src={c1}></img></div>
                <Link className="conn1" to="/">Home</Link>
                <Link className="conn2" to="/About">About</Link>
                <Link className="conn3" to="/Contacts">Contacts</Link>
                <Link className="conn4" to="/Profile">My Profile<i class='bx bx-user-circle'></i></Link>
            </div>
            <div className="body">
                <h1>Welcome to CourtEase</h1>
                <div className="Sel1">
                    <label className="l1">Select The Type of Court</label>
                    <Select
                        options={options1}
                        // multi
                        // values={options1.filter((data) => selectedValues1.includes(data.label))}
                        onChange={(value) => console.log(value)}
                    />
                </div>

                <div className="Sel2">
                    <label className="l2">Select The Type Of Case</label>
                    <Select
                        options={options2}
                        onChange={(value) => console.log(value)}
                    />
                </div>

                <div className="Sel3">
                    <label className="l3">Appeal/Direct</label>
                    <Select
                        options={options3}
                        onChange={(value) => console.log(value)}
                    />
                </div>

                <div className="Sel4">
                    <label className="l4">Petitioner-Respondent</label>
                    <Select
                        options={options4}
                        onChange={(value) => console.log(value)}
                    />
                </div>
                <div className="Sub">
                    <input className="but" type="submit"></input>
                </div>
                <div className="Out">
                    <label className="l1">Expected Timeline Of The Case</label>
                    {/* <input type="text" className="res"></input> */}
                </div>
            </div>
            <div className="footer">
                <label className="l1">Our Online Sites</label>
                <a className="b1" href="https://www.facebook.com"><i class='bx bxl-facebook-square'></i></a>
                <a className="b2" href="https://www.instagram.com"><i class='bx bxl-instagram' ></i></a>
                <a className="b3" href="https://www.linkedin.com/feed/"><i class='bx bxl-linkedin-square'></i></a>
                <a className="b4" href="https://www.linkedin.com/feed/"><i class='bx bxl-twitter'></i></a>
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