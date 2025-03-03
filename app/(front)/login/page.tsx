"use client"
import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import log from '../../images/doc/info.svg';
// import register from '../../images/doc/register.svg';
import page from '../signup/page';
import Link from 'next/link';
// import './SignInForm.css';
// import SignUp from './SignUp';

const SignInForm = () => {
    const [isSignUp, setSignUp] = useState(false);
    // const navigate = useNavigate();

    return (
        <div className={`${isSignUp ? "signin-signup-container sign-up-mode" : "signin-signup-container"}`}>
            <Link href="/">
                <span className="pageCloseBtn"></span>
            </Link>
            <div className="forms-container">
                {/* <div className="signIn-singUp">
                    <SignUp setSignUp={setSignUp} />
                </div> */}
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3 className='text-white'>New here ?</h3>
                        <p>Unravel the world of MediConnect. Sign up and be one of us.</p>
                        <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
                    </div>
                    {/* <img src={`${log}`} alt="" className="pImg" /> */}
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3 className='text-white'>One of us ?</h3>
                        <p>Log in and start with where you left</p>
                        <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
                    </div>
                    {/* <img src={`${register}`} alt="" className="pImg" /> */}
                </div>
            </div>
        </div>
    );
};

export default SignInForm;