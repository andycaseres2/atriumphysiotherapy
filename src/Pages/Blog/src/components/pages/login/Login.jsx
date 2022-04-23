import React from 'react'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder='Enter your email...' />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder='Enter yorur password' />
        <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
            <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  );
}


