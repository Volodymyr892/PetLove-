import { useState } from "react"
import Navigation from "../Navigation/Navigation"
// import UserNav from "../UserNav/UserNav"
import AuthNav from "../AuthNav/AuthNav"
import css from "./Header.module.css"

import logo from "../../assets/logo.svg"
import menu from "../../assets/menu-01.svg"
import x from "../../assets/x.svg"
import xW from "../../assets/xW.svg"

import logoWhite from "../../assets/logoWhite.svg"
import menuWhite from "../../assets/menuWhite.svg"
import { useLocation } from "react-router-dom"
import LogOutBtn from "../LogOutBtn/LogOutBtn"
import UserBar from "../UserBar/UserBar"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

export default function Header() {
    const  isLoggedIn = useSelector(selectIsLoggedIn);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isPage = location.pathname === "/home"

    const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const currentLogo = isPage ? logoWhite : logo;
    const currentMenu = isPage ? menuWhite : menu;
    const currentExit = isAuthPage ? xW : x;

    
    return (
    <header className={css.header}>
        <div className={css.headerLogo}>
            <img src={currentLogo} alt="logo" />
        </div>
        <div className={`${css.headerMenu} ${isAuthPage ? css.LoginPage : css.headerMenu} ${isMenuOpen ? css.open : ""}`}>
            <button className={css.burger} onClick={toggleMenu}> {isMenuOpen ? <img src={currentExit} alt="x" /> : ""}</button>
            <Navigation/>
            {isLoggedIn ? <LogOutBtn/> :<AuthNav/> }
        </div>
        <div className={css.userContainer}>
            {isLoggedIn ? <UserBar/> : "" }
            <button className={css.burgerBtn} onClick={toggleMenu}> {isMenuOpen ? "" : <img src={ currentMenu} alt="menu" />}</button>
        </div>
    </header>
    )
}
