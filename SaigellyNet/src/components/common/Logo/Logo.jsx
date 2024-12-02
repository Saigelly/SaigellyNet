import s from "./Logo.module.css"

const Logo = (props) => {
    return (
        <div className={`${s.logo} ${props.subClass ? props.subClass : ""}`}>
            <a href="#">SaigellyNet</a>
        </div>
    )
}

export default Logo;