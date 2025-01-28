
import css from "./PetsItem.module.css"
import delet from "../../assets/delete.svg"
import { useDispatch } from "react-redux"
import { currentDelette } from "../../redux/auth/operations";

function formatDate(dateString) {
    if (!dateString || dateString === "0000-00-00") return "00.00.0000";
    
    const [year, month, day] = dateString.split("-");
    return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
  }

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
                    <p className={css.nsmeDes}>{formatDate(birthday)}</p>
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