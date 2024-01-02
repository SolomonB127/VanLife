import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Login.css'
const Login = () => {
     //Initialisation of State & Function
    const [loginData, setLoginData] = useState({ email: "", password: ""});
    
    function handleChange(e){
        const {name, value} = e.target;
        setLoginData(prevData => {
            return{
                ...prevData,
                [name]: value
            }
        });
        console.log(loginData)
    };

    function handleSubmit(e){
        e.preventDefault();
        console.log(loginData)
    }
  return (
    <section className='login-container'>
        <div>
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <input 
                type="email" 
                name="email" 
                placeholder='Enter your email'
                onChange={handleChange}
                value={loginData.email}
                />
                <input 
                type="password" 
                name="password" 
                placeholder='Enter your password'
                onChange={handleChange}
                value={loginData.password}
                />
                <button>Sign-in</button>
            </form>
            <h4>Don't have an account? <Link to="signup">Sign-up</Link></h4>
        </div>
    </section>
  )
}

export default Login