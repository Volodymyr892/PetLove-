import { NavLink } from "react-router-dom";
import css from "./LogOutBtn.module.css"

export default function LogOutBtn() {
  return (
    <NavLink to="/register"><button className={css.button}>Log out</button></NavLink>
  )
}

