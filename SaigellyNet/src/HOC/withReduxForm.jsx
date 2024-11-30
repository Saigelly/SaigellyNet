import { Form } from "react-final-form"

export const withReduxForm = (Component) => {
    const withReduxFormComponent = (props) => {
        return (<Form
            initialValues={props.initialValues}
            onSubmit={props.onSubmit} >
            <Component {...props}/>
        </Form >)
    }
    return (   withReduxFormComponent )
}