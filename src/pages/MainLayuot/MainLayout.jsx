import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import css from "./MainLayuot.module.css"

export default function MainLayout() {
  return (
    <div className={css.container}>
      <Header/>
      <Outlet/>
    </div>
  )
}