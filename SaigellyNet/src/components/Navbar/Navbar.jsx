import s from "./Navbar.module.css"
import NavItem from "./NavItem/NavItem";

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div className="burger">бургер</div>
            <ul className={s.navList}>
                {props.state.navItems.map((item, index) => <NavItem item={item} key={index} userId={props.userId} setProfile={props.setProfile}/>)}
            </ul>
        </nav>
    )
}

export default Navbar;