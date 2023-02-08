import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './Login1.css';
import "bootstrap/dist/css/bootstrap.min.css"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    // useEffect(()=>{
    //     handleEmail()
    // },[email])

    // useEffect(()=>{
    //     handlePassword()
    // },[password])

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        console.log({ email, password })
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        }).then(result => {
            console.log(result.data)
            alert('success')
        })
            .catch(error => {
                alert('service error')
                console.log(error)
            })
    }
    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                value={email}
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={handleEmail}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                value={password}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={handlePassword}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#7F56D9' }} onClick={handleApi}>
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Forgot <Link to={"/Signup"}>password?</Link>
                        </p>
                    </div>
                </form>
            </div>

            {/* <div className="login-section">
                <div className="login-section1">
                    <div className="card">
                        <div className="card-section1-message">
                            <h2>Welcome Back</h2><br/>
                            <p>Welcome back! Please enter details.</p> <br/>
                        </div>
                        <div className="section">
                            <div className="section-email"><p>Email</p><input value={email} onChange={handleEmail} type="text" placeholder="Enter your email"/> <br /></div>
                            <div className="section-password"><p>Password</p><input className="section-password-secret" value={password} onChange={handlePassword} type="text" placeholder="........."/> <br /></div>

                            <div className="section-button"><button className="button1" onClick={handleApi} >Login</button></div>
                        </div>  
                        < div className="section-last">Don't have an account? <Link to={"/Signup"}><div className="section-signup">Sign up</div></Link></div>
                    </div>
                </div>
            </div> */}
        </>
    )
}