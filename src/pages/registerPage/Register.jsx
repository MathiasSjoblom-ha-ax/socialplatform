import React from 'react'
import "./Register.css"

export default function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='leftPart'>
            <h3 className='mediaName'>TIMERA</h3>
                <div className='loginInfo'>
                    <h3 className='loginTopText'>Register</h3>
                    <input className='loginInput' placeholder='Username' type="text" />
                    <input className='loginInput' placeholder='Email' type="text" />
                    <input className='loginInput' placeholder='Password' type="text" />
                    <button className='loginButton'>Register Account</button>
                    <button className='loginButton'>Log in</button>
                </div>
            </div>
            <div className='rightPart'>
                <img className="sideImage" src="./assets/images/LoginPic.png"/>
            </div>
        </div>
    </div>
  )
}
