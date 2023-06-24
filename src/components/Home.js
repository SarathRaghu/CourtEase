import React from "react"
import 'boxicons'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import './Home.css'
import c1 from './img/1.jpeg'
import c2 from './img/2.jpeg'
import c3 from './img/3.jpeg'
import c4 from './img/4.jpeg'

function Home() {
    const location = useLocation()

    return (
        <div className="homepage">
            <div className="header">
                <h2>CourtEase</h2>
                <div className="f1"><img alt="abc" height="65%" width="3.6%" src={c1}></img></div>
                <Link className="conn1" to="/">Home</Link>
                <Link className="conn2" to="/About">About</Link>
                <Link className="conn3" to="/Contacts">Contacts</Link>
                <input type="text" className="search" placeholder="Search...."></input>
                <button className="sbut" type="submit"><i class='bx bx-search'></i></button>
            </div>
            <div className="body">
                <h1>Welcome to CourtEase</h1>
                <div className="body1">
                    <div className="f2"><img height="80%" width="80%" src={c2}></img></div>
                    <Link className="conn4" to="/Login">Petitioners</Link>
                    <br />
                </div>
                <div className="body2">
                    <div className="f3"><img height="80%" width="80%" src={c3}></img></div>
                    <Link className="conn5" to="/Advocates">Advocates</Link>
                </div>
                <div className="body3">
                    <div className="f4"><img height="80%" width="80%" src={c4}></img></div>
                    <Link className="conn6" to="/Judges">Judges</Link>
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

export default Home