import React from 'react'
import Logo from "../images/login-logo.png"

function FormSection() {
  return (
    <div className="form-section">
    <img src={Logo} alt="" />
    <form>
      <span>
        <label htmlFor="username">Email or Username</label>
        <input type="text" name="username" />
      </span>
      <span>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </span>
      <button className="sign-btn">Sign in</button>
    </form>
    <div className="form-links">
      <a href="#">Forget Password?</a>
      <a href="#">Sign in with company or school</a>
    </div>
    <button className="create-btn">Create an Account</button>
    <div className="about-links">
      <a href="#">
        Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.</a
      >
      <a href="#">Terms & Use | Privacy Policy</a>
    </div>
  </div>
  )
}

export default FormSection