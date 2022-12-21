import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../store/actions/auth-actions";
import { authActions } from "../store/slices/authSlice";
import "../../public/assests/login.css";

export default function Login(props) {
    const emailInputRef = useRef();
    const pwdInputRef = useRef();
    const nameInputRef = useRef();
    const emailInputReflogin = useRef();
    const pwdInputReflogin = useRef();
    const dispatch = useDispatch();
    const [panel, setPanel] = useState(false);
    const navigate = useNavigate();
    const [validEmail, setValidEmail] = useState(true);
    const [validPwd, setValidPwd] = useState(true);
    const [validName, setValidName] = useState(true);
    const error = useSelector((state) => state.auth.error);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);

    const panelActive = () => {
        setPanel((pre) => {
            return !pre;
        });
    };

    const signUpHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPwd = pwdInputRef.current.value;
        const enteredName = nameInputRef.current.value;

        if (enteredEmail === "" || enteredName === "" || enteredPwd === "") {
            if (enteredEmail === "") {
                setValidEmail(false);
            }
            if (enteredName === "") {
                setValidName(false);
            }
            if (enteredPwd === "") {
                setValidPwd(false);
            }
            return;
        }
        dispatch(register({ email: enteredEmail, password: enteredPwd, name: enteredName }));
    };

    useEffect(() => {
        if (error) console.log(error);
        if (isAuth) {
            dispatch(authActions.clearErrors());
            navigate("/dashboard");
        }
    }, [error, dispatch, navigate, isAuth, user]);

    const loginHandler = async (event) => {
        event.preventDefault();
        const enteredEmail = emailInputReflogin.current.value;
        const enteredPwd = pwdInputReflogin.current.value;

        if (enteredEmail === "") {
            setValidEmail(false);
            return;
        }
        if (enteredPwd === "") {
            setValidPwd(false);
            return;
        }
        dispatch(login({ email: enteredEmail, password: enteredPwd }));
    };
    useEffect(() => {
        if (error) console.log(error);
        if (isAuth) {
            dispatch(authActions.clearErrors());
            navigate("/dashboard");
        }
    }, [error, dispatch, navigate, isAuth, user]);

    return (
        <div className='Loginbody'>
            <h1 className='headtag' style={{ marginBlockStart: "0.67em", marginBlockEnd: "0.67em" }}>
                <a href='/login'>
                    <i
                        className='fa-solid fa-chalkboard-user fa-2x loginhomeicon'
                        style={{ color: "rgb(3, 42, 126)" }}
                    ></i>
                </a>
                Welcome to WebOffice
            </h1>
            <div className={`logincontainer ${panel ? "right-panel-active" : ""}`} id='logincontainer'>
                <div className='form-container sign-in-container'>
                    <form className='authform' id='signin_form' name='signin_form' onSubmit={loginHandler}>
                        <h1 className='headtag'>Sign in</h1>
                        <div className='social-container'>
                            <a href='/login' className='facebook formtag'>
                                <i className='fa fa-facebook-official'></i>
                            </a>
                            <a href='/login' className='google formtag'>
                                <i className='fa fa-google-plus-official'></i>
                            </a>
                            <a href='/login' className='linkedin formtag'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                        <span>or use your account</span>
                        <div style={{ width: "100%" }}>
                            <input
                                className='forminput'
                                name='email'
                                type='email'
                                placeholder='Email'
                                ref={emailInputReflogin}
                            />
                            {/* {!valid&&<div className='null_err'>
                                <span>
                                    {" "}
                                    <i className='fa-solid fa-circle-exclamation'></i>
                                    Email is required
                                </span>
                            </div>} */}
                            {!validEmail && (
                                <div className='null_err'>
                                    <span>
                                        {" "}
                                        <i className='fa-solid fa-circle-exclamation'></i>
                                        Email is required
                                    </span>
                                </div>
                            )}
                        </div>
                        <div style={{ width: "100%" }}>
                            <input
                                className='forminput'
                                name='password'
                                type='password'
                                placeholder='Password'
                                ref={pwdInputReflogin}
                            />
                            {/* {!valid&&<div className='null_err'>
                                <span>
                                    {" "}
                                    <i className='fa-solid fa-circle-exclamation'></i>
                                    Password is required
                                </span>
                            </div>} */}
                            {!validPwd && (
                                <div className='null_err'>
                                    <span>
                                        {" "}
                                        <i className='fa-solid fa-circle-exclamation'></i>
                                        Password is required
                                    </span>
                                </div>
                            )}
                        </div>
                        <a className='formtag' href='/login'>
                            Forgot your password?
                        </a>
                        <button className='formbutton' id='login' type='submit'>
                            Log in
                        </button>
                    </form>
                </div>
                <div className='form-container sign-up-container'>
                    <form
                        className='authform'
                        id='signup_form'
                        name='signup_form'
                        method='POST'
                        onSubmit={signUpHandler}
                    >
                        <h1 className='headtag'>Create Account</h1>
                        <div className='social-container'>
                            <a href='/login' className='facebook formtag'>
                                <i className='fa fa-facebook-official'></i>
                            </a>
                            <a href='/login' className='google formtag'>
                                <i className='fa fa-google-plus-official'></i>
                            </a>
                            <a href='/login' className='linkedin formtag'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>

                        <div style={{ width: "100%" }}>
                            <input
                                className='forminput'
                                type='email'
                                name='email'
                                placeholder='Email'
                                ref={emailInputRef}
                            />
                            {!validEmail && (
                                <div className='null_err'>
                                    <span>
                                        {" "}
                                        <i className='fa-solid fa-circle-exclamation'></i>
                                        Email is required
                                    </span>
                                </div>
                            )}
                        </div>
                        <div style={{ width: "100%" }}>
                            <input
                                className='forminput'
                                id='fname'
                                type='text'
                                name='name'
                                placeholder='Name'
                                ref={nameInputRef}
                            />
                            {!validName && (
                                <div className='null_err'>
                                    <span>
                                        {" "}
                                        <i className='fa-solid fa-circle-exclamation'></i>
                                        name is required
                                    </span>
                                </div>
                            )}
                        </div>
                        <div style={{ width: "100%" }}>
                            <input
                                className='forminput'
                                type='password'
                                name='password'
                                placeholder='Password'
                                ref={pwdInputRef}
                            />
                            {!validPwd && (
                                <div className='null_err'>
                                    <span>
                                        {" "}
                                        <i className='fa-solid fa-circle-exclamation'></i>
                                        Password is required
                                    </span>
                                </div>
                            )}
                        </div>

                        <button className='formbutton' style={{ marginTop: "10px" }} type='submit' id='submit'>
                            Submit
                        </button>
                    </form>
                </div>
                <div className='overlay-container'>
                    <div className='overlay'>
                        <div className='overlay-panel overlay-left'>
                            <h1 className='headtag'>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className='formbutton' onClick={panelActive} id='signIn'>
                                Sign In
                            </button>
                        </div>
                        <div className='overlay-panel overlay-right'>
                            <h1 className='headtag'>Create account</h1>
                            <p>Not a member yet!! Register here now.</p>
                            <button className='formbutton' onClick={panelActive} id='signUp'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
