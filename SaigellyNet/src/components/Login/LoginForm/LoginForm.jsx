import { Field} from "react-final-form"
import { required } from "../../../utilities/validates";
import { Input } from "../../common/FormControl/FormControl";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" component={Input} placeholder="Логин"
                    validate={required} />
            </div>
            <div>
                <Field name="password" component={Input} placeholder="Пароль"
                    validate={required} />
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

