import React, { useContext, useRef } from 'react'
import "./Login.css"
import { Context } from '../../context/Context';
import { LoginApiCall } from '../../Callings';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const {user, isFetching, dispatch} = useContext(Context);

    const submitFunction = (event) => {
        event.preventDefault();
        LoginApiCall({email: email.current.value, password: password.current.value}, dispatch);
        console.log(user);
    };
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='leftPart'>
                <h3 className='mediaName'>TIMERA</h3>
                    <div className='loginInfo'>
                        <form className='loginForm' onSubmit={submitFunction}>
                            <h3 className='loginTopText'>Login</h3>
                            <span className='loginDesc'>Welcome, login or create an account to connect</span>
                            <input className='loginInput' ref={email} placeholder='Email' type="email" required/>
                            <input className='loginInput' ref={password} placeholder='Password'  required/>
                            <span className='forgotText'>Forgot password?</span>
                            <button className='loginButton' type="submit">{isFetching ? "Logging in" : "LogIn"}</button>
                            <button className='loginButton'>Create account</button>
                        </form>
                    </div>
                </div>
                <div className='rightPart'>
                    <img className="sideImage" src="./assets/images/LoginPic.png"/>
                </div>
            </div>
        </div>
    )
}
