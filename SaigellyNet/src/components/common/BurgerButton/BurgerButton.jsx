import s from "./BurgerButton.module.css"

const BurgerButton = ({ callback }) => {
    return (
        <button className={s.toggleButton} onClick={callback}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default BurgerButton;