import { Field} from "react-final-form"
import { composeValidators, maxLength, required } from "../../../utilities/validates";
import { Input } from "../../common/FormControl/FormControl";

const LoginForm = (props) => {
    const maxLength10  = maxLength(10)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" component={Input} placeholder="Логин"
                    validateFields={[required, maxLength10]} />
            </div>
            <div>
                <Field name="password" component={Input} placeholder="Пароль"
                    validate={required} type="password"/>
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

export default LoginForm;

