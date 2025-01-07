import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css"

export default function Navigation() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";


  const makeNavLinkClass = ({isActive})=>`${css.home} ${isAuthPage ? css.LoginPage : css.home} ${isActive? css.active:''}`.trim();
  return (
    <nav className={css.navigation}>
        <NavLink className={makeNavLinkClass} to="/news">News</NavLink>
        <NavLink className={makeNavLinkClass} to="/notices">Find pet</NavLink>
        <NavLink className={makeNavLinkClass} to="/friends">Our friends</NavLink>
    </nav>
  )
}