import React, { useState } from "react";
import { registerUser } from "./signUpApi"
const marginTop = {marginTop: "10px"}

function Signup({setIsSignup}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setConfPassword] = useState("")

    function handelSubmit() {
        if (password === confPassword) {
            registerUser(email, password).then(() => {
                setIsSignup(false)
            })
        }
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
        <div style={marginTop}>
            <label htmlFor="userConfPassword">Confirm Password: </label>
            <input type="password" id="userConfPassword" value={confPassword} onChange={e => setConfPassword(e.target.value)} />
        </div>

        <button style={marginTop} onClick={handelSubmit}>Submit</button>
    </div>
}

export default Signup