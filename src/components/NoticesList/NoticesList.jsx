import { useDispatch, useSelector } from "react-redux";
import NoticesItem from "../NoticesItem/NoticesItem"
import Pagination from "../Pagination/Pagination"
import { selectNotices } from "../../redux/Notices/selectors";
import { useEffect, useState } from "react";
import { featchNotices } from "../../redux/Notices/operations";

export default function NoticesList(){
    const dispatch = useDispatch();
    const {page, perPage, totalPages,results }  = useSelector(selectNotices);
    const [currentPage, setCurrentPage] = useState(page);
    
    useEffect(() => {
        dispatch(featchNotices({ page: currentPage, perPage }));
    }, [dispatch, currentPage, perPage]);
    return(
        <section>
            <ul>
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