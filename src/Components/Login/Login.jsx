import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLenCreator, minLenCreator, requiredField } from "../../Utils/Validation";
import { Input, Textarea } from "../FormControl/FormControl";
import { connect } from "react-redux";
import { login } from './../../Rdeux/auth-reducer'
import { Navigate } from "react-router-dom";
import style from './Login.module.css'

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    return (
        <div >
            {props.isAuth
                ? <Navigate to={'/Profile/29844'} />
                : <ReduxLoginForm onSubmit={onSubmit} />
            }

        </div>)
}

const LoginForm = (props) => {

    const maxLen = maxLenCreator(30);
    const minLen = minLenCreator(6);

    return (
        <div className={style.loginPage}>
            <form onSubmit={props.handleSubmit} className={style.form}>
                <h1 className={style.formTitle}>Sign in to your account</h1>
                <div className={style.inputContainer}>
                    <Field component={Input} name="email" placeholder="Login" validate={[requiredField, maxLen, minLen]} />
                </div>
                <div className={style.inputContainer}>
                    <Field component={Input} name="password" placeholder="Password" type={"password"} validate={[requiredField, maxLen, minLen]} />
                </div>
                <div>
                    <Field component="input" name="rememberMe" type="checkbox" />Remember me
                </div>
                <button type="submit" className={style.submit}>Sign in</button>
                <p className={style.signupLink}>
                    No account?
                    <a href="https://social-network.samuraijs.com">Sign up</a>
                </p>
            </form>
        </div>
    );
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);