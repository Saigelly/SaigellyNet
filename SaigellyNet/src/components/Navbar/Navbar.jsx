import s from "./Navbar.module.css"
import NavItem from "./NavItem/NavItem";

const Navbar = ({state}) => {
    return (
        <nav className={s.nav}>
            <div className="burger">бургер</div>
            <ul className={s.navList}>
                {state.navItems.map((item, index) => <NavItem item={item} key={index} />)}
            </ul>
        </nav>
    )
}

export default Navbar;