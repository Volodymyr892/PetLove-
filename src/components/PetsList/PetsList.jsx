import { useSelector } from "react-redux";
import PetsItem from "../PetsItem/PetsItem";
import { selectCurrentPets } from "../../redux/auth/selectors";
import css from "./PetsList.module.css"

export default function PetsList(){
    const pets = useSelector(selectCurrentPets);
    console.log("🚀 ~ PetsList ~ pets:", pets)


    return(
       <ul className={css.list}>
        {pets.map((pet)=>(
        <li key={pet._id}><PetsItem pet={pet}/></li>
        ))}
       </ul>
    )
}