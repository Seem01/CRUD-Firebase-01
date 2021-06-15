import React from "react";
import { Input, Label, Button } from "semantic-ui-react";

const Login = (props) => {

    const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
    } = props;
    

    return(
        <section className="login">
            <div className="loginContainer">
            <h1 className="header1">Login</h1>
            <label>Username</label>
            <Input type="text" autoFocus required value={email} onChange={(event) => {
                setEmail(event.target.value)
            }}></Input>
            <p className="errrorMsg">{emailError}</p>
            <label>Password</label>
            <Input type="password" autoFocus required value={password} onChange={(event) => {
                setPassword(event.target.value)
            }}></Input>
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {!hasAccount ? (
                    <>
                    <Button primary onClick={handleLogin}>Login</Button>
                    <p>Don't hava an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                ):(
                    <>
                     <Button primary onClick={handleSignup}>Sign Up</Button>
                    <p>hava an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                )}
            </div>
            </div>
        </section>
    )
}

export default Login;