import React, { useState } from 'react';
import './Account.css';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const [loginFocused, setLoginFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <section className='Login flex'>

      <header className='flexed'>
        <img src="./svg/nebrosco-logo.svg" alt="Nebrosco Logo" />
        <h1>Sign in</h1>
      </header>

      <form className='flexed' onSubmit={handleSubmit}>
        <label className={`${loginFocused || login != '' ? 'focused' : ''}`}>
          <h5>Login</h5>
          <input
            type="text"
            value={login}
            onChange={e => setLogin(e.target.value)}
            onFocus={() => setLoginFocused(true)}
            onBlur={() => setLoginFocused(false)}
          />
        </label>
        <label className={`${passwordFocused || password != '' ? 'focused' : ''}`}>
          <h5>Passord</h5>
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
        </label>
        <input className='submit ghost' type="submit" value='Next' />
      </form>

      <footer className='flexed'>
        <button className='ghost'><h5>Create an account</h5></button>
        <button className='ghost'><h5>Forgot password?</h5></button>
      </footer>

    </section>
  )
}

export default Login;