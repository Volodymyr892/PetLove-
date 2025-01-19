import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../NewsItem/NewsItem";
import Pagination from "../Pagination/Pagination";
import { selectNews } from "../../redux/news/selectors";
import { useEffect } from "react";
import { fetchNews } from "../../redux/news/operation";

export default function NewsList() {
    const dispatch = useDispatch();
    const news  = useSelector(selectNews);
    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);
    return(
        <section>
            <ul>
                {news && news.map( (newItem) =>(
                <li key={newItem.id}>
                    <NewsItem news={newItem}/>
                </li>
                ))}
            </ul>
            <Pagination/>
        </section>
    )
}