import css from "./NotFoundPage.module.css"
import four from "../../assets/4.svg"
import cat from "../../assets/cat.svg"
import { NavLink } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <main className={css.container}>
      <div className={css.imgContainer}>
        <img src={four} alt="four" />
        <img src={cat} alt="cat" />
        <img src={four} alt="four" />
      </div>
      <div className={css.buttonContainer}>
        <p className={css.description}>Ooops! This page not found :(</p>
          <NavLink to="/home"><button className={css.button}>To home page</button></NavLink>
      </div>
    </main>
  )
}
