import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css"

export default function AuthNav() {
  return (
   <nav>
    <NavLink to="/login">
        <button className={css.buttonLogin}>Log In</button>
    </NavLink>
    <NavLink to="/register">
        <button className={css.buttonRegister} >Registration</button>
    </NavLink>
   </nav>
  )
}