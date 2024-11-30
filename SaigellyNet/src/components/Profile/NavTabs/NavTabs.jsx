import s from "./NavTabs.module.css"
import TabLink from "./TabLink/TabLink";


const NavTabs = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                {props.tabLinks.map((navItem, index) => <TabLink item={navItem} userID={props.userId} key={index} /> )}
            </ul>
        </nav>
    )
}

export default NavTabs;