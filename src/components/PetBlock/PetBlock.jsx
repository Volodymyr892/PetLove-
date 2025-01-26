import css from "./PetBlock.module.css"
import dog from "../../assets/dog.svg"
export default function PetBlock() {
  return (
    <div className={css.container}>
      <img className={css.img} src={dog} alt="dog" />
    </div>
  )
}