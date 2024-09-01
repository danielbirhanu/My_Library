import React, { useRef, useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { User } from '../../../../models/User';

interface LoginFormProps {
    updateLoggedInUser(user:User):void
}

export const LoginForm: React.FC<LoginFormProps> = ({updateLoggedInUser}) => {
  const [error, setError] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
      try{
        const req = await axios.post('http://localhost:8000/auth/login', {
            email: emailRef.current.value,
            password: passwordRef.current.value
      });
      
      setError(false);
      updateLoggedInUser(req.data.user);
      } catch(e){
        setError(true);
      }
    }
  };

  return (
    <form className="login-form">
      <h1>Please Login</h1>
      {error ? <p className="login-form-error">'Username or password incorrect'</p> : ''}
      <div className="login-form-input-group">
        <h6>Email:</h6>
        <input className="login-form-input" placeholder="Email" name="email" required ref={emailRef} />
      </div>
      <div className="login-form-input-group">
        <h6>Password:</h6>
        <input className="login-form-input" placeholder="Password" name="password" type="password" required ref={passwordRef} />
      </div>
      <button className="login-form-submit" onClick={handleLogin}>Login</button>
      <p>Don't have an account? <span className="login-form-register">Create one here.</span></p>
    </form>
  );
};