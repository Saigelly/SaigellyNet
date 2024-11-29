import s from "./FormControl.module.css"

export const Input = ({ input, meta, ...props }) => {
    return (
        <div className={meta.error && meta.touched && s.error}>
            <input  {...input} placeholder={props.placeholder} />
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
}
