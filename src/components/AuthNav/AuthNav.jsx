import { NavLink, useLocation } from "react-router-dom";
import css from "./AuthNav.module.css"

export default function AuthNav() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  return (
   <nav className={css.stickyNav}>
    <NavLink to="/login">
        <button className={`${css.buttonLogin} ${isAuthPage ? css.LoginPage : css.buttonLogin}`}>Log In</button>
    </NavLink>
    <NavLink to="/register">
        <button className={css.buttonRegister} >Registration</button>
    </NavLink>
   </nav>
  )
}