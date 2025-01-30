import { NavLink, useLocation } from "react-router-dom";
import profile from "../../assets/Profile.svg"
import user from "../../assets/user.svg"

import css from "./UserBar.module.css"
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function UserBar() {
  const user = useSelector(selectUser) || "";
  console.log("🚀 ~ UserBar ~ user:", user)
  const location = useLocation();
  
  const isPage = location.pathname === "/home"
  const avatarSrc = user?.avatar || profile;
  
  const current = isPage ? user : profile;
  return (
    <div className={css.container}>
      <NavLink to="/profile"><img width={50} height={50} className={css.img} src={ avatarSrc} alt="" /></NavLink>
      <p className={css.name}>{user.name}</p>
    </div>
  )
}