import React from 'react'
import './login.scss'

export default function Login() {
  return (
    <div className='login'>
        <form className='login-form'>
            <input placeholder='Email' required type="email" />
            <input placeholder='Password' required type="password" />
            <button>Login</button>
            <div className='to-signup'>
                <p>Don't you have an account?</p>
                <a href="/signup">Sign Up</a>
            </div>
        </form>
    </div>
  )
}
