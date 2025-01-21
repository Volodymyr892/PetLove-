import x from "../../assets/x.svg"
import css from "./ModalAttention.module.css"
import dog from "../../assets/dogAttention.svg"
import { NavLink } from "react-router-dom"
export default function ModalAttention({onClose}){
           return(
               <div className={css.container}>
                   <div className={css.modal}>
                     <button className={css.buttonClose} onClick={onClose}><img src={x} alt="x" /></button>
                    <div className={css.imgContainer}>
                        <img src={dog} alt="attention" />
                    </div>
                        <div className={css.containerTitle}>
                            <h2 className={css.title}>Attention</h2>
                            <p className={css.decription}>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.</p>
                        </div>
                    <NavLink to="/login"><button className={css.logIn}>Log In</button></NavLink>
                    <NavLink to="/register"><button className={css.register}>Registration</button></NavLink>
                    </div>
                </div>
    )
}