import { useSelector } from "react-redux"
import { selectNoticesFAvorits } from "../../redux/auth/selectors"
import NoticesItem from "../NoticesItem/NoticesItem";
import { selectNoticesId } from "../../redux/Notices/selectors";
import css from "./Favorits.module.css"

export default function Favorits(){
    const favoritId = useSelector(selectNoticesFAvorits);
    console.log("🚀 ~ Favorits ~ favoritId:", favoritId);

    const noti = useSelector(selectNoticesId)
    console.log("🚀 ~ Favorits ~ noti:", noti)
    return(
        <ul className={css.list}>
            {favoritId.map((favorit)=>(
                <li key={favorit._id}>
                <NoticesItem notices={favorit}/>
            </li>
        ))}
        </ul>
    )
}