import s from "./Navbar.module.css"
import NavItem from "./NavItem/NavItem";
import React, { useState } from "react";
import BurgerButton from "../common/BurgerButton/BurgerButton";
import Logo from "../common/Logo/Logo";

const Navbar = (props) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = () => {
        setIsOpenMenu(true);
    }

    const closeMenu = () => {
        setIsOpenMenu(false);
    }

    return (
        <div className={`${s.sidebar} ${isOpenMenu ? s.openMenu : ""}`}>
            <div className={`${s.sidebarLeft} ${s.smallSidebar} `}>
                <div className={s.toggle}>
                    <BurgerButton callback={openMenu} />
                </div>
                <nav className={s.menu}>
                    <ul className={s.menuList}>
                        {props.state.navItems.map((item, index) =>
                            <NavItem
                                item={item}
                                key={index}
                                userId={props.userId}
                                setProfile={props.setProfile}
                                isLarge={false} />)}
                    </ul>
                </nav>
            </div>
            <div className={`${s.largeSidebar} ${s.sidebarLeft}`}>
                <div className={s.toggle}>
                    <Logo />
                    <BurgerButton callback={closeMenu} />
                </div>
                <nav className={s.menu}>
                    <ul className={s.menuList}>
                        {props.state.navItems.map((item, index) =>
                            <NavItem
                                item={item}
                                key={index}
                                userId={props.userId}
                                setProfile={props.setProfile}
                                isLarge={true} />)}
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar;