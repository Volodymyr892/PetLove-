import css from "./NoticesItem.module.css"
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import ModalAttention from "../ModalAttention/ModalAttention";
import ModalNotice from "../ModalNotice/ModalNotice";
import { useState } from "react";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { noticesFavoritesAdd, noticesFavoritesDelete } from "../../redux/auth/operations";
import delet from "../../assets/delete.svg"
import { useLocation } from "react-router-dom";

export default function NoticesItem({notices}){
    const location = useLocation();
    const dispatch = useDispatch();
    const  isLoggedIn = useSelector(selectIsLoggedIn);
    const [isModalOpen, setIsModalOpen ] = useState(false);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const roundedRating = Number(String(notices.popularity || 0)[0]);

    // const maxLength = 50; // Встановіть максимальну кількість символів, яку хочете показати

    //  // Обрізаємо текст і додаємо "..." якщо він перевищує maxLength
    //  const truncatedText = notices.comment.length > maxLength 
    //      ? notices.comment.slice(0, maxLength) + "..."
    //      : notices.comment;


    let buttonContent = null;
    if (location.pathname === "/profile/favorits") {
        buttonContent = (
            <button className={css.butoonDelete} onClick={() => console.log("Delete", notices._id)}>
                <img src={delet} alt="delete" />
            </button>
        );
    } else if (location.pathname === "/profile") {
        buttonContent = (
            <button className={css.butoonDelete} onClick={() => dispatch(noticesFavoritesDelete(notices._id))}>
                <img src={delet} alt="delete" />
            </button>
        );
    }else if (location.pathname === "/notices") {
        buttonContent =(
        <button className={css.buttonHeart} onClick={() => dispatch(noticesFavoritesAdd(notices._id))}>
        <FaRegHeart />
        </button>
        );
    } else if (location.pathname === "/profile/viewed") {
        buttonContent = null;
    }

    const toggleModal = (notice = null) => {
        setSelectedNotice(notice);
        setIsModalOpen((prev) => !prev);
    };
    return(
        <div className={css.container}>
        <img className={css.img} src={notices.imgURL} alt="turtle" />
        <div className={css.contentContainer}>
           <div className={css.titleContainer}>
                <h3 className={css.title}>{notices.title}</h3>
               <div className={css.starContainer}>
                    <FaStar  className={css.starIcon} />
                    <p className={css.number}>{roundedRating}</p>
               </div>
           </div>
    
            <ul className={css.item}>
                <li >
                    <p className={css.persona}>Name</p>
                    <p className={css.personaData}>{notices.name}</p>
                </li>
                <li >
                    <p className={css.persona}>Birthday</p>
                    <p className={css.personaData}>{notices.birthday}</p>
                </li>
                <li >
                    <p className={css.persona}>Sex</p>
                    <p className={css.personaData}>{notices.sex}</p>
                </li>
                <li >
                    <p className={css.persona}>Species</p>
                    <p className={css.personaData}>{notices.species}</p>
                </li>
                <li >
                    <p className={css.persona}>Category</p>
                    <p className={css.personaData}>{notices.category}</p>
                </li>
            </ul>
            <p className={css.decription}>{notices.comment}</p>
        </div>

        <div className={css.contaiBtnPrice}>
            <p className={css.price}>${notices.price}</p>
            <div className={css.containerButton}>
                <button className={css.buttonLearn} onClick={() => toggleModal(notices)}>Learn more</button>
               {buttonContent}
            </div>
        </div>
        {isModalOpen && (
                isLoggedIn
                    ? <ModalNotice notices={selectedNotice} onClose={toggleModal} />
                    : <ModalAttention onClose={toggleModal} />
            )}

        </div>
    )
}