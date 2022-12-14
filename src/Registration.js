import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import './index.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; //Starts will a lower or upper case, followed by 3 to 23 characters lower or upper case or digits or symbols
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //1 lower case, 1 upper case, 1 number, 1 special character
const EMAIL_REGEX =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const REGISTER_URL = '/register';


const Registration = () => {
    const userRef = useRef();
    const errRef = useRef();
    const emlRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    let [electric, setElectric] = useState('');
    let [gas, setGas] = useState('');
    let [oil, setOil] = useState('');
    let [mileage, setMileage] = useState('');
    let [shortFlights, setShortFlights] = useState('');
    let [longFlights, setLongFlights] = useState('');
    let total = 0;
    const newspaper = false;
    const aluminium = false;


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
         const result = USER_REGEX.test(user);
         console.log(result);
         console.log(user);
         setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd, email])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);
        if(!v1 || !v2 || !v3){
            setErrMsg("Invalid Entry");
            return;
        }
        //Add backend here
        console.log(user,pwd,email);
        setSuccess(true);
    }

    const calculateScore = () => {
        electric *= 105;
        gas += 105;
        oil *= 113;
        mileage *= 0.79;
        shortFlights *= 11;
        longFlights *= 44;

        total = electric + gas + oil + mileage + shortFlights + longFlights;

         if(newspaper == false){
            total += 184;
        }
        if(aluminium == false){
            total += 166
        }

        return total;
    }

        return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/Login">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="email"
                            ref={emlRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must have @ and .com<br />
                        </p>

                        {/* Score Counting */}
                        <label>Electricity</label>
                        <input 
                            type="text"
                            required
                            value={electric}
                            onChange={(e) => setElectric(e.target.value)}
                        />

                        <label>Gas</label>
                        <input 
                            type="text"
                            required
                            value={gas}
                            onChange={(e) => setGas(e.target.value)}
                        />

                        <label>Oil</label>
                        <input 
                            type="text"
                            required
                            value={oil}
                            onChange={(e) => setOil(e.target.value)}
                        />

                        <label>Mileage</label>
                        <input 
                            type="text"
                            required
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                        />

                        <label>Short Flights</label>
                        <input 
                            type="text"
                            required
                            value={shortFlights}
                            onChange={(e) => setShortFlights(e.target.value)}
                        />

                        <label>Long Flights</label>
                        <input 
                            type="text"
                            required
                            value={longFlights}
                            onChange={(e) => setLongFlights(e.target.value)}
                        />

                        <button disabled={!validName || !validPwd || !validMatch || !validEmail ? true : false} 
                        onClick={calculateScore}>
                            Sign Up
                            </button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put Login link here*/}
                            <a href="/Login">Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Registration

