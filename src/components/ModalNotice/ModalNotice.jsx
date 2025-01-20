import css from "./ModalNotice.module.css"
import x from "../../assets/x.svg"
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
// import e from "../../assets/"
export default function ModalNotice({onClose, notices}){
    const roundedRating = Number(String(notices.popularity || 0)[0]); // Округлення до найближчого цілого числа
    const totalStars = Math.max(roundedRating, 5); // Мінімум 5 зірок
    const stars = Array.from({ length: totalStars }, (_, i) => i + 1);
    
    return(
        <div className={css.container}>
            <div className={css.modal}>
            <button className={css.buttonClose} onClick={onClose}><img src={x} alt="x" /></button>
            <div className={css.imgContainer}><img className={css.img} src={notices.imgURL} alt="" /></div>
            <div className={css.containerTitle}>
                <div>
                    <p>{notices.title}</p>
                    <div className={css.starContainer}>
                        {stars.map((star) => (
                                    <FaStar
                                        key={star}
                                        className={star <= roundedRating ? css.starYellow : css.starGrey}
                                    />
                        ))}
                        <p>{roundedRating}</p>
                    </div>
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
                    <p className={css.comment}>{notices.comment}</p>
                <div className={css.containerPrice}>
                    <p className={css.price}>${notices.price}</p>
                </div>
                <button className={css.buttonAdd}>
                    <div className={css.buttonContainerAdd}>
                        <p>Add to</p>
                        <FaRegHeart className={css.heart}/>
                    </div>
                </button>
                <button className={css.contact}>Contact</button>
            </div>
        </div>
    )
}