import {useRef, useState, useEffect} from 'react';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, email])

    let handleSubmit = async (e) => {
        fetch('http://127.0.0.1:5000/register', {

            method: 'POST', 
            mode: 'cors', 
            headers: { "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
            body: JSON.stringify({
                username: user,
                password: pwd,
                email: email
            })
            
          })
        e.preventDefault();
        setUser('');
        setPwd('');
        setEmail('');
        setSuccess(true);
        console.log(fetch.user)
        // try {
        //     console.log("Submitted")
        //     let res = await fetch("http://127.0.0.1:5000/register", {
        //       method: "POST",
        //       headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        //       body: JSON.stringify({
        //         username: user,
        //         password: pwd,
        //         email: email,
        //       }),
        //     });
        // // let resJson = await res.json();
        // if (res.status === 200){
        //     setUser('');
        //     setPwd('');
        //     setEmail('');
        //     setSuccess(true);
        // }
        // }catch (err) {
        //     console.log(err);
        //   }
    
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
                                 <label htmlFor="email">Email:</label>
                                <input 
                                    type="text" 
                                    id="email"
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                                <button>Sign In</button>
                            </form>

                            <p>
                                Need an Account?<br />
                                <span className="Line">
                                    {/*Link to the registration page*/}
                                    <a href="#">Sign Up</a>
                                </span>
                            </p>
                        </section>
                    )
            }
        </>
    )
}

export default Login