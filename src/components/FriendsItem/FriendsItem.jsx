import css from "./FriendsItem.module.css"
import elipse from "../../assets/Ellipse.png"
export default function FriendsItem(){
    return(
        <div className={css.container}>
            <img className={css.img} src={elipse} alt="elipse"  width={80} height={80}/>
           <div>
            <p className={css.time}>08:00 - 19:00</p>
                <h3 className={css.name}>LKP “Lion”</h3>
                <ul className={css.list}>
                    <li className={css.item}>
                        <p className={css.contacts}>Email:</p> 
                        <p className={css.contactDetails}>Ikplev@gmail.com</p></li>
                    <li className={css.item}>
                        <p className={css.contacts}>Address: </p>
                        <p className={css.contactDetails}>Promuslova Street,56</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.contacts}>Phone: </p>
                        <p className={css.contactDetails}> (032) 293-30-41</p>
                    </li>
                </ul>
           </div>
        </div>
    )
}