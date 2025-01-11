import { LuPen } from "react-icons/lu";
import user from "../../assets/user-2.svg"
import css from "./EditUserBtn.module.css"

export default function EditUserBtn(){
    return(
        <div className={css.container}>
            <div className={css.userContainer}>
                <p className={css.user}>User</p>
                <img src={user} alt="user" />
            </div>
            <button className={css.button} type="submit"><LuPen /></button>
        </div>
    )
}
