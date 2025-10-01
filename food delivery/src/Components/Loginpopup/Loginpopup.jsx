import React, { useState } from 'react';

import './Loginpopup.css'
import { assets } from '../../assets'

const Loginpopup = ({setShowLogin}) => {
    const[currState,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onAuxClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>

            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='your name' required/>}
                <input type="email" placeholder=' your email' required/>
                <input type="password" placeholder='your password' required/>
                </div>
                <button>{currState==="Sign Up"?"Create account":"Login"}</button>
                <div className='login-popup-condidtion'>
                  <input type="checkbox" required />
                  <p>By clicking on Login, you agree to our Terms & conditions & Privacy policy</p>
                </div>
                {currState==="Login"
                ?<p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
                :<p>Already have an account ?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
                
                

        </form>
      
    </div>
  )
}

export default Loginpopup
