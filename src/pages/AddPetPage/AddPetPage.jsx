
import AddPetForm from "../../components/AddPetForm/AddPetForm";
import PetBlockAdd from "../../components/PetBlockAdd/PetblockAdd";
import css from "./AddPetPage.module.css"

export default function AddPetPage() {
  
  return (
    <section className={css.section}>
      <PetBlockAdd/>
      <AddPetForm/>
    </section>
  )
}

