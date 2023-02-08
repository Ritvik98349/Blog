import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './Signup.css';
import "bootstrap/dist/css/bootstrap.min.css"

export default function Login(){
    const [username, setUserName] = useState('')
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleEmail = (e) => {
    //   setEmail(e.target.value)
    // }
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // console.log({ email, password })
    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handleFullName = (e) => {
        setFullName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }  
    const handleApi = () => {
      console.log({ username, fullname, email, password})
      axios.post('https://reqres.in/api/login', {
        username: username,
        fullname : fullname,
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
    
//    <span className="link-primary" onClick={changeAuthMode}>

    return(
        <>
                <div className="Auth-form-container">
                <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                    Already registered?{" "}
                    <span className="link-primary">
                        Sign In
                    </span>
                    </div>
                    <div className="form-group mt-3">
                    <label>User Name</label>
                    <input
                        value={username}
                        type="text"
                        className="form-control mt-1"
                        placeholder="e.g JaneDoe"
                        onChange={handleUserName}
                    />
                    </div>
                    <div className="form-group mt-3">
                    <label>Full Name</label>
                    <input
                        value={fullname}
                        onChange={handleFullName}
                        type="email"
                        className="form-control mt-1"
                        placeholder="e.g Jane Doe"
                    />
                    </div>                    
                    <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                        value={email}
                        onChange={handleEmail}
                        type="email"
                        className="form-control mt-1"
                        placeholder="Email Address"
                    />
                    </div>
                    <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={handlePassword}
                        type="password"
                        className="form-control mt-1"
                        placeholder="Password"
                    />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary" style={{backgroundColor:'#7F56D9', borderColor:'#7F56D9'}} onClick={handleApi}>
                        Submit
                    </button>
                    </div>
                    <p className="text-center mt-2">
                    Forgot <a href="#">password?</a>
                    </p>
                </div>
                </form>
                </div>
        </>
    )
}




