import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';//Importation of useLoaderData for prompt msg display.
import './stylesheets/Login.css';

export function loginLoader({ request }){
    return new URL(request.url).searchParams.get("message")
};

const Login = () => {
     //Initialisation of State & Function
    const [loginData, setLoginData] = useState({ email: "", password: ""});
    const message = useLoaderData();

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

    const style = {
        color: "red",
        textAlign: "center"
    }
    
  return (
    <section className='login-container'>
            <h1>Sign in to your account</h1>
            {message && <h3 style={style}>{ message }</h3>}
        <div>
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