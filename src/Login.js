import {useRef, useState, useEffect} from 'react';
// import {Link} from "react-router-dom";
// import { Nav, NavLink, NavMenu } 
//     from "./NavbarElements";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('');
        setPwd('');
        setSuccess(true);//Add Backend here       
    }

    return ( 

        <>
            {success ? (
                <section>
                    <h1> You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
                ) : (
                        <section >
                            <p ref = {errRef} className={errMsg ? "errmsg" : 
                            "offscreen"} aria-live="assertive">{errMsg}</p>
                            <h1>Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username">Username:</label>
                                <input 
                                    type="text" 
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                />
                                <label htmlFor="password">Password:</label>
                                <input 
                                    type="password" 
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                                <button>Sign In</button>
                            </form>

                            <p>
                                Need an Account?<br />
                                <span className="Line">
                                    {/*Link to the registration page*/}
                                    <a href={"./Registration"}>Sign Up</a>
                                    {/* <Link to="/Registration">Sign Up</Link> */}
                                    {/* <NavLink to="/Registration" activeStyle>
                                        Sign Up
                                    </NavLink> */}
                                </span>
                            </p>
                        </section>
                    )
            }
        </>
    )
}

export default Login