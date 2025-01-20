import { NavLink, Outlet } from "react-router-dom";

export default function MyNotices(){
    return(
        <>
        <div>
      <div>
        <NavLink to="/profile/favorits" className="tab">Favorites</NavLink>
        <NavLink to="/profile/viewed" className="tab">Viewed</NavLink>
      </div>

      <Outlet />
    </div>
        </>
    )
}