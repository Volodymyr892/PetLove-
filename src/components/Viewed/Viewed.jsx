import { useSelector } from "react-redux";
import css from "./Viewed.module.css"
import { selectNoticesViewed } from "../../redux/auth/selectors";
import NoticesItem from "../NoticesItem/NoticesItem";
export default function Viewed(){
    const vieweds = useSelector(selectNoticesViewed);
    return(
         <div>
                    {vieweds.length=== 0 ? (
                        <p className={css.emptyMessage}>
                            Oops, <span className={css.span}>looks like there aren't any furries</span> on our adorable page yet. 
                            Do not worry! View your pets on the "find your favorite pet" page 
                            and add them to your favorites.
                        </p>
                    ) : (
                        <ul className={css.list}>
                            {vieweds.map((viewed, index) => (
                                <li key={index}>
                                    <NoticesItem notices={viewed} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
    )
}