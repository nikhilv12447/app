import React, { useState } from "react";
import { loginUser } from "./loginApi"
import { useNavigate } from "react-router-dom"
import { login } from "../../../Store/actions"
import { useDispatch } from "react-redux"

const marginTop = {marginTop: "10px"}
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handelLogin() {
        loginUser(email, password).then(() => {
            dispatch(login.setIsUserLogin(true))
            navigate("/dashboard")
        }).catch(() => {
            
        })
    }
    return <div style={{padding: "10px"}}>
        <div style={marginTop}>
            <label htmlFor="userEmail">Email: </label>
            <input type="email" id="userEmail" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={marginTop}>
            <label htmlFor="userPassword">password: </label>
            <input type="password" id="userPassword" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <button style={marginTop} onClick={handelLogin}>Login</button>
    </div>
}

export default Login