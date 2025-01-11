import css from "./UserBlock.module.css"
import user from "../../assets/user.svg"

export default function UserBlock(){
    return(
        <div className={css.container}> 
            <div className={css.fotoContainer}>
                <div><img className={css.img} src={user} alt="" /></div>
                <p className={css.upload}>Upload photo</p>
            </div>
            <div>
                <h2 className={css.title}>My information</h2>
                <ul>
                    <li className={css.item}><p className={css.name}>Anna</p></li>
                    <li className={css.item}><p className={css.name}>anna00@gmail.com|</p></li>
                    <li className={css.item}><p className={css.name}>+380</p></li>
                </ul>
            </div>
        </div>
    )
}