import React, { useState } from 'react'
import './signup.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [captchaResponse, setCaptchaResponse] = useState('');
  const [errors, setErrors] = useState({});
  //const [, setCookies] = useCookies(['access_token']);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters.');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('The password must have at least 1 uppercase letter.');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('The password must contain at least 1 lowercase letter.');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('The password must contain at least 1 number.');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('The password must have at least 1 special character (?, @, !, #, %, +, -, *, etc.).');
    }
    return errors;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.username = 'E-mail field cannot be left blank.';
    }
    if (!password) {
      newErrors.password = 'Password field cannot be left blank.';
    } else {
      const passwordErrors = validatePassword(password);
      if (passwordErrors.length > 0) {
        newErrors.password = passwordErrors.join(' ');
      }
    }

    if (!captchaResponse) {
      newErrors.captcha = 'CAPTCHA verification required!';
    }

    setErrors(newErrors);

    // If the errors object is empty, it means the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('succesfull')
    } else {
      console.log(errors)
    }
  };

  return (
    <div className='signup'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <input value={name}
          onChange={(e) => setName(e.target.value)} placeholder='First Name' required type="text" />
        <input value={lastname}
          onChange={(e) => setLastname(e.target.value)} placeholder='Last Name' required type="text" />
        <input value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder='Email' required type="email" />
        <input value={password}
          onChange={(e) => setPassword(e.target.value)} placeholder='Password' required type="password" />
        <input value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' required type="password" />
        <button type='submit'>Sign Up</button>
        <div className='to-login'>
          <p>You already have an account?</p>
          <a href="/login">Login</a>
        </div>
        {/* Render error messages */}
        {Object.keys(errors).length > 0 && (
          <div className="error-messages">
            {Object.keys(errors).map((key) => (
              <p key={key} className="error">{errors[key]}</p>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}
