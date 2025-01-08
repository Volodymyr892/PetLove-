import css from "./NoticesItem.module.css"
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import turtle from "../../assets/turtle.jpg"
export default function NoticesItem(){
    return(
        <div className={css.container}>
        <img src={turtle} alt="turtle" />
        <div className={css.contentContainer}>
           <div className={css.titleContainer}>
                <h3 className={css.title}>Found Red-Eared Slider</h3>
               <div className={css.starContainer}>
                    <FaStar  className={css.starIcon} />
                    <p className={css.number}>2</p>
               </div>
           </div>
    
            <ul className={css.item}>
                <li >
                    <p className={css.persona}>Name</p>
                    <p className={css.personaData}>Shelly</p>
                </li>
                <li >
                    <p className={css.persona}>Birthday</p>
                    <p className={css.personaData}>12.08.2019</p>
                </li>
                <li >
                    <p className={css.persona}>Sex</p>
                    <p className={css.personaData}>Unknown</p>
                </li>
                <li >
                    <p className={css.persona}>Species</p>
                    <p className={css.personaData}>Turtle</p>
                </li>
                <li >
                    <p className={css.persona}>Category</p>
                    <p className={css.personaData}>Found</p>
                </li>
            </ul>
            <p className={css.decription}>Found this turtle near the pond. Contact if yours.</p>
        </div>

        <div className={css.contaiBtnPrice}>
            <p className={css.price}>$40.99</p>
            <div className={css.containerButton}>
                <button className={css.buttonLearn}>Learn more</button>
                <button className={css.buttonHeart}><FaRegHeart /></button>
            </div>
        </div>

        </div>
    )
}