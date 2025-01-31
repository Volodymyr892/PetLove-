import { useDispatch, useSelector } from "react-redux";
import NoticesItem from "../NoticesItem/NoticesItem"
import Pagination from "../Pagination/Pagination"
import { selectNotices} from "../../redux/notices/selectors";
import { useEffect, useState } from "react";
import { featchNotices } from "../../redux/notices/operations";
import { selectFilters } from "../../redux/filters/selector";
import css from "./NoticesLiist.module.css"

export default function NoticesList(){
    const dispatch = useDispatch();
    const {page, perPage, totalPages, results }  = useSelector(selectNotices);
    const filters = useSelector(selectFilters);

    const [currentPage, setCurrentPage] = useState(page);
    
    useEffect(() => {
        dispatch(featchNotices({ page: currentPage, perPage, ...filters}));
    }, [dispatch, currentPage, perPage, filters]);
    return(
        <section>
            <ul className={css.list}>
                {results.map((notices)=>(
                <li key={notices._id}>
                    <NoticesItem notices={notices}/>
                </li>))
                }
            </ul>
            <Pagination
             currentPage={currentPage}
             totalPages={totalPages}
             onPageChange={setCurrentPage}
            />
        </section>
    )
}