import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Login.css'
import 'boxicons'
import c1 from './img/1.jpeg'

function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/Petitioners", { state: { id: email } })
                        alert('Successfully Logged In')
                    }
                    else if (res.data === "notexist") {
                        alert("Incorrect Email or Password")
                    }
                })
                .catch(e => {
                    alert("Wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }
    }

    return (
        <div className="login">
            <div className="header">
                <h2>CourtEase</h2>
                <div className="f1"><img height="65%" width="3.6%" src={c1}></img></div>
                <Link className="conn1" to="/">Home</Link>
                <Link className="conn2" to="/About">About</Link>
                <Link className="conn3" to="/Contacts">Contacts</Link>
                <div className="sign">
                </div>
                <Link className="conn4" to="/Signup">Signup</Link>
            </div>
            <div className="body">
                <div className="body1">
                    <h1>Login</h1>
                    <form action="POST">
                        <input className="mail" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name="" id="" />
                        <input className="pass" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="password" name="" id="" />
                        <input className="sub" type="submit" onClick={submit} value="Sign In"/>
                    </form>

                    <br />
                    <Link className="p" to="/Region">Forgot Password?</Link>
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

export default Login