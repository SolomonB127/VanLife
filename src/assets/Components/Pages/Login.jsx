import React from 'react';
import { Link, useLoaderData, useNavigation, Form, redirect, useActionData } from 'react-router-dom';//Importation of useLoaderData for prompt msg display.
import './stylesheets/Login.css';

import { loginUser } from '../../../api';
export function loginLoader({ request }){
    return new URL(request.url).searchParams.get("message")
};

// Created an async action function in order to get data
export async function action({ request }){
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host" // Receive the request in utils.js and get search param of `redirectTo`, with a defaulf route asa `/host`*

    // Handling errors when using Actions (Note: useActionData Hook will be imported)
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true);
        // Redirecting to pages in Host route after being loggedIn
            const response = redirect(pathname)
            response.body = true
            return response
        
    } catch (error) {
        // Throwing error just in-case
        return error.message
    }

    return null
}

const Login = () => {
     //Initialisation of State, Function & Utilities
    const errorMessage = useActionData();
    const message = useLoaderData();
    const navigation = useNavigation();  // importing useNavigation inorder for easy transition when logged-in (Note: should NOT be mistaken for useNavigate)

    const style = {
        color: "red",
        textAlign: "center"
    }
    
  return (
    <section className='login-container'>
            <h1>Sign in to your account</h1>
            {message && <h3 style={style}>{ message }</h3>}
            {errorMessage && <h3 style={style}>{ errorMessage }</h3>}
        <div>
            <Form method='post'  className='login-form' replace> {/* Added a replace prop inorder to navigete smoothly back & forth */}
                <input 
                type="email" 
                name="email" 
                placeholder='Enter your email'
                />
                <input 
                type="password" 
                name="password" 
                placeholder='Enter your password'
                />
                <button disabled={ navigation.state === "submitting"}
                >
                    {navigation.state === "submitting" ? "Signing in..." : "Sign in"}
                </button>
            </Form>
            <h4>Don't have an account? <Link to="signup">Sign-up</Link></h4>
        </div>
    </section>
  )
}

export default Login