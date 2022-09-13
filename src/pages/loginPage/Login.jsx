import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='leftPart'>
            <h3 className='mediaName'>TIMERA</h3>
                <div className='loginInfo'>
                    <h3 className='loginTopText'>Login</h3>
                    <span className='loginDesc'>Welcome, login or create an account to connect</span>
                    <input className='loginInput' placeholder='Username' type="text" />
                    <input className='loginInput' placeholder='Password' type="text" />
                    <span className='forgotText'>Forgot password?</span>
                    <button className='loginButton'>Login</button>
                    <button className='loginButton'>Create account</button>
                </div>
            </div>
            <div className='rightPart'>
                <img className="sideImage" src="./assets/images/LoginPic.png"/>
            </div>
        </div>
    </div>
  )
}
