import s from "./NavTabs.module.css"
import TabLink from "./TabLink/TabLink";


const NavTabs = ({tabLinks}) => {

    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {tabLinks.map((navItem, index) => <TabLink item={navItem} key={index} /> )}
            </ul>
        </nav>
    )
}

export default NavTabs;