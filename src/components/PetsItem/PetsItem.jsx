
import css from "./PetsItem.module.css"
import delet from "../../assets/delete.svg"

export default function PetsItem({pet}) {
    return(
       <div className={css.container}>
        <img className={css.img} src={pet.imgURL} alt="pets" />

        <div className={css.containerContent}>
            <h2 className={css.title}>{pet.title}</h2>
            <button type="submit" className={css.butoon}><img src={delet} alt="" /></button>
    
            <ul className={css.list}>
                <li>
                    <p className={css.name}>Name</p>
                    <p className={css.nsmeDes}>{pet.name}</p>
                </li>
                <li>
                    <p className={css.name}>Birthday</p>
                    <p className={css.nsmeDes}>{pet.birthday}</p>
                </li>
                <li>
                    <p className={css.name}>Sex</p>
                    <p className={css.nsmeDes}>{pet.sex}</p>
                </li>
                <li>
                    <p className={css.name}>Species</p>
                    <p className={css.nsmeDes}>{pet.species}</p>
                </li>
            </ul>
        </div>
       </div>
    )
}