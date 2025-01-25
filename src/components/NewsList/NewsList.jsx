import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../NewsItem/NewsItem";
import Pagination from "../Pagination/Pagination";
import { selectNews } from "../../redux/news/selectors";
import { useEffect, useState } from "react";
import { fetchNews } from "../../redux/news/operation";
import css from "./NewsList.module.css"

export default function NewsList() {
    const dispatch = useDispatch();
    const { results, page, perPage, totalPages }  = useSelector(selectNews);
    const [currentPage, setCurrentPage] = useState(page);

    useEffect(() => {
        dispatch(fetchNews({ page: currentPage, perPage }));
    }, [dispatch, currentPage, perPage]);
    
    return(
        <section>
            <ul className={css.list}>
                {results && results.map( (newItem) =>(
                <li key={newItem.id}>
                    <NewsItem news={newItem}/>
                </li>
                ))}
            </ul>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </section>
    )
}