import css from "./UserBlock.module.css"
import { useSelector } from "react-redux"
import { selectCurrentName } from "../../redux/auth/selectors";
import defolt from "../../assets/defoltAvatar.svg"

export default function UserBlock(){
    const select = useSelector(selectCurrentName) || [];

    return(
        <div className={css.container}> 
            <div className={css.fotoContainer}>
                <div><img className={css.img} src={select.avatar || defolt} alt="select" /></div>
                <p className={css.upload}>Upload photo</p>
            </div>
            <div>
                <h2 className={css.title}>My information</h2>
                <ul className={css.list}>
                    <li className={css.item}><p className={css.name}>{select.name}</p></li>
                    <li className={css.item}><p className={css.name}>{select.email}</p></li>
                    <li className={css.item}><p className={css.name}>{select.phone}</p></li>
                </ul>
            </div>
        </div>
    )
}