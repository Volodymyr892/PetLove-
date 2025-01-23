
import css from "./PetsItem.module.css"
import delet from "../../assets/delete.svg"
import { useDispatch } from "react-redux"
import { currentDelette } from "../../redux/auth/operations";

export default function PetsItem({pet:{imgURL, title, name, birthday, sex, species, _id}}) {
    const dispatch = useDispatch();

    const handleDelete = ()=> dispatch(currentDelette(_id))

    return(
       <div className={css.container}>
        <img className={css.img} src={imgURL} alt="pets" />

        <div className={css.containerContent}>
            <h2 className={css.title}>{title}</h2>
            <button type="submit" className={css.butoon}><img src={delet} alt="delete" onClick={handleDelete}/></button>
    
            <ul className={css.list}>
                <li>
                    <p className={css.name}>Name</p>
                    <p className={css.nsmeDes}>{name}</p>
                </li>
                <li>
                    <p className={css.name}>Birthday</p>
                    <p className={css.nsmeDes}>{birthday}</p>
                </li>
                <li>
                    <p className={css.name}>Sex</p>
                    <p className={css.nsmeDes}>{sex}</p>
                </li>
                <li>
                    <p className={css.name}>Species</p>
                    <p className={css.nsmeDes}>{species}</p>
                </li>
            </ul>
        </div>
       </div>
    )
}