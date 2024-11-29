import { Form } from "react-final-form"
import s from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm"


const initialValues = {
    login: "Saigelly@gmail.com",
    password: "e5bhfafef",
    rememberMe: false
}

const Login = (props) => {
    const logoutProfile = (e) => {
        e.preventDefault();
        props.logout();
    }
    return (
        <div>
            <h1>LOGIN</h1>
            < Form
                initialValues={initialValues}
                onSubmit={props.onSubmit}
                component={LoginForm}>
            </Form>
            {/* <button onClick={logoutProfile}>выйти</button> */}
        </div>
    )
}

export default Login;

