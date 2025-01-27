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
        <div>
            {favoritId.length === 0 ? (
                <p className={css.emptyMessage}>
                    Oops, <span className={css.span}>looks like there aren't any furries</span> on our adorable page yet. 
                    Do not worry! View your pets on the "find your favorite pet" page 
                    and add them to your favorites.
                </p>
            ) : (
                <ul className={css.list}>
                    {favoritId.map((favorit) => (
                        <li key={favorit._id}>
                            <NoticesItem notices={favorit} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}