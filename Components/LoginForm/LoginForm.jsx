import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

// import backgroundimg from '../Assets/landing_page_bkg.jpg'

import Navbarone from '../Navbar/Navbar'

const LoginForm = () => {
  return (
    <>

<div>
  <Navbarone />
</div>

    <div className='welcome-message'>
    <h1>PlanIt<span>FamIt</span></h1>

        <p>Approachable modern family planning methods for partners <br/> and families here in the Philippines.
          </p>
    </div>


    <div className= 'wrapper'>

      <form actions="">

        <div className='welcome_loginpage'>
        <h1>Welcome Back!</h1>
        <h5> Let's start exploring the beneficial ways of
          modern family planning here at PlanItFamIt!
        </h5>
        </div>

        <div className="input-box" >
          <input type='text' placeholder='Username' required />
          <FaUser className='icon' />
        </div>
        
        <div className="input-box password">
          <input type='password' placeholder='Password' required/>
          <FaLock className='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type='checkbox' /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <div className='btn_login'>
        <button  type="submit">LOGIN</button>
        </div>

        <div className="register-link">
          <p>Don't have an account? <a href='#'> Register </a> </p>
        </div>

        <div className= "version">
          <p> PlanItFamIt v1.0.1 </p>
        </div>

        <div className= "reserved">
          <p> All rights reserved 2024.</p>
        </div>
      
      </form>
    </div>
    </>
  );
};

export default LoginForm;