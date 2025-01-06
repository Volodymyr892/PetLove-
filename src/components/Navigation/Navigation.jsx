import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"

const makeNavLinkClass = ({isActive})=>`${css.home} ${isActive? css.active:''}`.trim();


export default function Navigation() {
  return (
    <nav className={css.navigation}>
        <NavLink className={makeNavLinkClass} to="/news">News</NavLink>
        <NavLink className={makeNavLinkClass} to="/notices">Find pet</NavLink>
        <NavLink className={makeNavLinkClass} to="/friends">Our friends</NavLink>
    </nav>
  )
}