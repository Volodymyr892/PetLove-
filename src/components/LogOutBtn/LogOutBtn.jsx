
import css from "./LogOutBtn.module.css"
import { useState } from "react";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction";

export const  LogOutBtn =()  =>{
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = ()=> setIsOpenModal(true);
  const closeModal = ()=>setIsOpenModal(false);
  return (
    <div>
      <button className={css.buttonZ} onClick={openModal}>Log out</button>
      {isOpenModal && <ModalApproveAction onClose={closeModal}/>}
    </div>
  )
}

export const  LogOutBtnProfile = ()=> {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = ()=> setIsOpenModal(true);
  const closeModal = ()=>setIsOpenModal(false);
  return (
    <div>
      <button className={css.button} onClick={openModal}>Log out</button>
      {isOpenModal && <ModalApproveAction onClose={closeModal}/>}
    </div>
  )
}


