import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup"
import { verifyLogin } from "./verifyLogin"
import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../../Store/actions"

function AuthLayout() {
    const [isSignup, setIsSignup] = useState(false)
    const isUserLoggedIn = useSelector(state => state.login.isUserLogin)
    const dispatch = useDispatch()

    useEffect(() => {
        verifyLogin().then(({ isLogin }) => {
            dispatch(login.setIsUserLogin(isLogin))
        }).catch(() => {
            dispatch(login.setIsUserLogin(false))
        })
    }, [])

    return <div>
        {!isUserLoggedIn && (isSignup ? <Signup setIsSignup={setIsSignup}/> : <Login />)}
        {
            !isUserLoggedIn && (isSignup ?
                <span style={{marginLeft: "10px", cursor: "pointer", color: "darkblue"}} onClick={() => setIsSignup(false)}>Login.</span> :
                <span style={{marginLeft: "10px", cursor: "pointer", color: "darkblue"}} onClick={() => setIsSignup(true)}>Register, if you don't have account.</span>)
        }
        {
            isUserLoggedIn && <Outlet />
        }
    </div>
}

export default AuthLayout