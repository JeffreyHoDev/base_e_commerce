import styles from './login.page.module.scss'

import { useState } from 'react'

import { createUserAndSignIn, signInWithGoogle } from '../../utils/firebase.util'

import { setUser } from '../../redux/reducers/userReducer'
import { useDispatch } from 'react-redux'

import { useNavigate } from "react-router-dom";

import GoogleLogo from '../../assets/google.png'

const LoginPage = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    })

    const onLogin = async() => {
        let data = await createUserAndSignIn(loginDetails.email, loginDetails.password)
        dispatch(setUser(data))
        // once user login, redirect back to main page
        return navigate("/")
    }

    const googleLogin = async() => {
        let data = await signInWithGoogle()
        dispatch(setUser(data))
        // once user login, redirect back to main page
        return navigate("/")
    }

    return (
        <div className={styles.loginPageContainer}>
            <div className={styles.loginPageFormContainer}>
                <h2>Sign up and Login</h2>
                <div className={styles.loginPageForm}>
                    <label className={styles.loginFormLabel} htmlFor='email-input'>Email</label>
                    <input className={styles.loginFormInput} type="email" onChange={(e) => setLoginDetails({...loginDetails, email: e.target.value})}></input>
                    <label className={styles.loginFormLabel} htmlFor='password-input'>Password</label>
                    <input className={styles.loginFormInput} type="password" onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})}></input>
                    <button onClick={onLogin} className={styles.loginSubmitButton}>Login</button>
                </div>
                <div>OR</div>
                <div onClick={googleLogin} className={styles.googleLogoContainer}><img className={styles.googleLogo} src={GoogleLogo} alt="google-login-logo"/></div>
            </div>
        </div>
    )
}

export default LoginPage