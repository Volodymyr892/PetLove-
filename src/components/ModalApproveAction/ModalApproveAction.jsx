import css from "./ModalApproveAction.module.css"
import x from "../../assets/x.svg"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations";
export default function ModalApproveAction({onClose}) {
    const dispatch = useDispatch();


    return(
        <div className={css.container}>
        <div className={css.modal}>
            <button className={css.buttonClose} onClick={onClose}><img src={x} alt="x" /></button>
            <div>
                <h2 className={css.title}>Already leaving?</h2>
                <button className={css.buttonYes} onClick={()=>{dispatch(logout())}}>Yes</button>
                <button className={css.buttonCancle} onClick={onClose}>Cancle</button>
            </div>
        </div>
     </div>
    )
}