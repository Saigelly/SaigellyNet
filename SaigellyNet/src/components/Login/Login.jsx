import { Field, Form } from "react-final-form"
import s from "./Login.module.css"
import { requiredField } from "../../utilities/validates"

const onSubmit = (formData) => {
    console.log(formData)
}

const initialValues = {
    login: "",
    password: "",
    rememberMe: false
}

const Login = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            < Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                component={LoginForm}>
            </Form>
        </div>
    )
}
const Input = ({ input, meta, ...props }) => {
    return (
        <div className={meta.error && meta.touched && s.error}>
            <input  {...input} placeholder={props.placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
}

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component={Input} placeholder="Логин"
                 validate={requiredField}/>
            </div>
            <div>
                <Field name="password" component={Input} placeholder="Пароль" 
                validate={requiredField}/>
            </div>
            <div>
                <Field name="rememberMe" component={Input} type="checkbox" />
                <label>Запомнить меня</label>
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

export default Login;

