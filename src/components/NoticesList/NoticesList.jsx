import { useDispatch, useSelector } from "react-redux";
import NoticesItem from "../NoticesItem/NoticesItem"
import Pagination from "../Pagination/Pagination"
import { selectNotices } from "../../redux/Notices/selectors";
import { useEffect } from "react";
import { featchNotices } from "../../redux/Notices/operations";

export default function NoticesList(){
    const dispatch = useDispatch();
    const noticeses  = useSelector(selectNotices);
    
    useEffect(() => {
        dispatch(featchNotices());
    }, [dispatch]);
    return(
        <section>
            <ul>
                {noticeses.map((notices)=>(
                <li key={notices._id}>
                    <NoticesItem notices={notices}/>
                </li>))
                }
            </ul>
            <Pagination/>
        </section>
    )
}