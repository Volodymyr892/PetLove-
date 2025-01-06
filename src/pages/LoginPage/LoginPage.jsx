import LoginForm from "../../components/LoginForm/LoginForm";
import PetBlock from "../../components/PetBlock/PetBlock";
import css from "./LoginPage.module.css"

export default function LoginPage() {
  return (
    <div className={css.container} >
      <PetBlock/>
      <LoginForm/>
    </div>
  )
}