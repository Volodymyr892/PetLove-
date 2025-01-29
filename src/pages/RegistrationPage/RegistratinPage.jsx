import PetBlock from "../../components/PetBlock/PetBlock";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css"

export default function RegistratinPage() {
  return (
    <section className={css.section}>
      <PetBlock/>
      <RegistrationForm/>
    </section>
  )
}
