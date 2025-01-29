import { NavLink, useLocation } from "react-router-dom";
import profile from "../../assets/Profile.svg"
import user from "../../assets/user.svg"

import css from "./UserBar.module.css"

export default function UserBar() {
  const location = useLocation();
  
  const isPage = location.pathname === "/home"
  
  const current = isPage ? user : profile;
  return (
    <div>
      <NavLink to="/profile"><img src={current} alt="" /></NavLink>
      <p className={css.name}>Anna</p>
    </div>
  )
}