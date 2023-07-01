import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css';
import FIULogo from './fiu-alone.jpg';

const LoginPage = function() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post('/api/login', { email, password });
            const token = response.data.token;

            // Store token in local storage or cookie
            // Redirect to the authenticated user's page
        
        } catch (error) {
            console.log(error.response.data.message);
        }

    };

    return (
        <div>
            <div class="html"><link rel="stylesheet" href="login_reg_style.css"/></div>
            <form onSubmit={handleLogin}>
                <div class="con">
                    <header class="head-form">
                        <h2>Log In</h2>
                        <p>Welcome back to Free Food FIU!</p>
                    </header>
                    <br></br>
                    
                    <div class="field-set">
                        <div class="logo-center">
                            <figure>
                                <img src={FIULogo} alt="FIU LOGO"
                                    width="150" 
                                    height="150"
                                />
                            </figure>
                            <br></br>
                        </div>
                        <span class="input-item">
                            <i class="fa fa-user-circle"></i>
                        </span>

                        <input 
                            class="form-input"
                            id="txt-input"
                            type="email"
                            placeholder="Email"
                            required
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                        <br></br>

                        <span class="input-item">
                            <i class="fa fa-key"></i>
                        </span>

                        <input 
                            class="form-input"
                            type="password"
                            placeholder="Password"
                            id="pwd"
                            name="password"
                            required
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                        />

                        <span>
                            <i class="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
                        </span>

                        <br></br>

                        <button class="log-in"> Log In </button>
                    </div>

                    <div class="other">
                        <button class="btn submits frgt-pass">Forgot Password</button>
                        <button class="btn submits sign-up">Sign Up 
                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </form>

        </div>
      );
    };

export default LoginPage;