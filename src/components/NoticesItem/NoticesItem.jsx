import css from "./NoticesItem.module.css"
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function NoticesItem({notices}){
    return(
        <div className={css.container}>
        <img className={css.img} src={notices.imgURL} alt="turtle" />
        <div className={css.contentContainer}>
           <div className={css.titleContainer}>
                <h3 className={css.title}>{notices.title}</h3>
               <div className={css.starContainer}>
                    <FaStar  className={css.starIcon} />
                    <p className={css.number}>2</p>
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
                <button className={css.buttonLearn}>Learn more</button>
                <button className={css.buttonHeart}><FaRegHeart /></button>
            </div>
        </div>
        </div>
    )
}