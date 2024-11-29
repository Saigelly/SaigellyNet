import { Form } from "react-router-dom"

export const FormRedux = (props) => {
    return (
        < Form
            initialValues={props.initialValues}
            onSubmit={props.newPost}>
            {props.children}
        </Form>
    )
}
