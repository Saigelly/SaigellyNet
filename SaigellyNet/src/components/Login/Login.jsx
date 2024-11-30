import { Form } from "react-final-form"
import s from "./Login.module.css"
import LoginForm from "./LoginForm/LoginForm"


const initialValues = {
    login: "",
    password: "",
    rememberMe: false
}

const Login = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            < Form
                initialValues={initialValues}
                onSubmit={props.onSubmit}
                component={LoginForm}>
            </Form>
        </div>
    )
}

export default Login;

