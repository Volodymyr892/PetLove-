import { LuPen } from "react-icons/lu";
import user from "../../assets/user-2.svg"
import css from "./EditUserBtn.module.css"
import ModalEditUser from "../ModalEditUser/ModalEditUser";
import { useState } from "react";

export default function EditUserBtn(){
    const [isModal, setIsModalOpen] = useState(false);

    const openModal = ()=> setIsModalOpen(true);
    const closeModal = ()=>setIsModalOpen(false);
    return(
        <div className={css.container}>
            <div className={css.userContainer}>
                <p className={css.user}>User</p>
                <img src={user} alt="user" />
            </div>
            <button className={css.button} type="submit" onClick={openModal}> <LuPen /></button>
            {isModal && <ModalEditUser onClose={closeModal} />}
        </div>
    )
}
