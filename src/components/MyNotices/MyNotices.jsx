import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from "./MyNotices.module.css"

export default function MyNotices(){
  const location = useLocation();
    const isFavoritesActive = location.pathname === "/profile" || location.pathname === "/profile/favorits";
    return(
      <div className={css.container}>
      <div className={css.nav}>
          <NavLink 
              to="/profile/favorits" 
              className={({ isActive }) => 
                  isActive || isFavoritesActive ? `${css.tabF} ${css.active}` : css.tabF
              }
          >
              My favorite pets
          </NavLink>
          <NavLink 
              to="/profile/viewed" 
              className={({ isActive }) => isActive ? `${css.tabV} ${css.active}` : css.tabV}
          >
              Viewed
          </NavLink>
      </div>
      <Outlet />
  </div>
    )
}