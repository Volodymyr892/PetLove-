import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css"
import { useEffect, useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth >= 1280);

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isHome =  location.pathname === "/"

   useEffect(() => {
          const handleResize = () => setIsMobileView(window.innerWidth >= 1280);
          window.addEventListener("resize", handleResize);
      
          return () => window.removeEventListener("resize", handleResize);
        }, []);


  const makeNavLinkClass =  ({isActive})=>`${css.home} ${isAuthPage  && !isMobileView ? css.LoginPage : css.home} ${isActive? css.active:''}`.trim();
  const makeNavLinkhome =  ({isActive})=>`${css.home} ${ isHome ? css.LoginPage : css.home} ${isActive? css.active:''}`.trim()
  const make = isHome ? makeNavLinkhome : makeNavLinkClass;
  return (
    <nav className={css.navigation}>
        <NavLink className={make} to="/news">News</NavLink>
        <NavLink className={make} to="/notices">Find pet</NavLink>
        <NavLink className={make} to="/friends">Our friends</NavLink>
    </nav>
  )
}