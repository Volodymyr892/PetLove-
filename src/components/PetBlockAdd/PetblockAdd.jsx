import addDog from "../../assets/addDog.jpg"
import css from "./PetBlockAdd.module.css"
export default function PetBlockAdd(){
    return(
        <div className={css.container}>
            <img src={addDog} alt="addDog" />
        </div>
    )
}