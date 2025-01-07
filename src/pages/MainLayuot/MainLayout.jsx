import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import css from "./MainLayuot.module.css"

export default function MainLayout() {
  const location = useLocation();

  const getPageStyle = () => {
    return location.pathname === "/home" ? css.homePage : css.defaultPage;
  };

  return (
    <div className={`${css.container} ${getPageStyle()}`}>
      <Header/>
      <Outlet/>
    </div>
  )
}