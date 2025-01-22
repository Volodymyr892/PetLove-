import { useSelector } from "react-redux";
import PetsItem from "../PetsItem/PetsItem";
import { selectCurrentPets } from "../../redux/auth/selectors";

export default function PetsList(){
    const pets = useSelector(selectCurrentPets);
    console.log("🚀 ~ PetsList ~ pets:", pets)


    return(
       <ul>
        {pets.map((pet)=>(
        <li key={pet._id}><PetsItem pet={pet}/></li>
        ))}
       </ul>
    )
}