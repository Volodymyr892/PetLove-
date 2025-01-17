import NewsItem from "../NewsItem/NewsItem";
import Pagination from "../Pagination/Pagination";

export default function NewsList() {
    return(
        <section>
            <ul>
                <li><NewsItem/></li>
            </ul>
            <ul>
                <li><NewsItem/></li>
            </ul>
            <ul>
                <li><NewsItem/></li>
            </ul>
            <ul>
                <li><NewsItem/></li>
            </ul>
            <Pagination/>
        </section>
    )
}