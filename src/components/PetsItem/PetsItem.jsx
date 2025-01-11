import pets from "../../assets/Pets.jpg"
import css from "./PetsItem.module.css"
import delet from "../../assets/delete.svg"

export default function PetsItem() {
    return(
       <div className={css.container}>
        <img className={css.img} src={pets} alt="pets" />

        <div className={css.containerContent}>
            <h2 className={css.title}>Golden Retriever Pu...</h2>
            <button type="submit" className={css.butoon}><img src={delet} alt="" /></button>
    
            <ul className={css.list}>
                <li>
                    <p className={css.name}>Name</p>
                    <p className={css.nsmeDes}>Daisy</p>
                </li>
                <li>
                    <p className={css.name}>Birthday</p>
                    <p className={css.nsmeDes}>01.10.2022</p>
                </li>
                <li>
                    <p className={css.name}>Sex</p>
                    <p className={css.nsmeDes}>Female</p>
                </li>
                <li>
                    <p className={css.name}>Species</p>
                    <p className={css.nsmeDes}>Dog</p>
                </li>
            </ul>
        </div>
       </div>
    )
}