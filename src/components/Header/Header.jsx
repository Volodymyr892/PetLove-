import { useState } from "react"
import Navigation from "../Navigation/Navigation"
import UserNav from "../UserNav/UserNav"
import AuthNav from "../AuthNav/AuthNav"
import css from "./Header.module.css"
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu-01.svg"
import x from "../../assets/x.svg"


export default function Header() {
    const [isLogedIn] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
      };
  return (
    <header className={css.header}>
        <div className={css.headerLogo}>
            <img src={logo} alt="logo" />
        </div>
        <button className={css.burgerBtn} onClick={toggleMenu}> {isMenuOpen ? "" : <img src={menu} alt="menu" />}</button>
        <div className={`${css.headerMenu} ${isMenuOpen ? css.open : ""}`}>
            <button className={css.burgerBtn} onClick={toggleMenu}> {isMenuOpen ? <img src={x} alt="x" /> : ""}</button>
            <Navigation/>
            {isLogedIn ? <AuthNav/> : <UserNav/>}
        </div>
    </header>
  )
}
