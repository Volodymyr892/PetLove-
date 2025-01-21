import css from "./UserBlock.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentName } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { current, currentFull } from "../../redux/auth/operations";

export default function UserBlock(){
    const dispatch = useDispatch();
    const select = useSelector(selectCurrentName);

    useEffect(()=>{
        dispatch(current());
        dispatch(currentFull());
    },[dispatch])
    return(
        <div className={css.container}> 
            <div className={css.fotoContainer}>
                <div><img className={css.img} src={select.avatar} alt="select" /></div>
                <p className={css.upload}>Upload photo</p>
            </div>
            <div>
                <h2 className={css.title}>My information</h2>
                <ul>
                    <li className={css.item}><p className={css.name}>{select.name}</p></li>
                    <li className={css.item}><p className={css.name}>{select.email}</p></li>
                    <li className={css.item}><p className={css.name}>{select.phone}</p></li>
                </ul>
            </div>
        </div>
    )
}