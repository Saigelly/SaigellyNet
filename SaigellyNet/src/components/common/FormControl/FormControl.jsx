import s from "./FormControl.module.css"



export const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={hasError && s.error}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}> <input  {...input} {...restProps} /> </FormControl>
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}> <textarea  {...input} {...restProps} /> </FormControl>
}
