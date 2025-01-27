import { GoPlus } from "react-icons/go";
import css from "./AddPet.module.css"
import { NavLink } from "react-router-dom";
export default function AddPet(){
    return(
        <div className={css.container}>
            <h2 className={css.title}>My pets</h2>
            <NavLink to="/add-pet"><button className={css.button} type="submit">
                <div className={css.buttonContainer}>
                    <p>Add pet</p>
                    <GoPlus className={css.plus}/>
                </div>      
            </button>
            </NavLink>
        </div>
    )
}