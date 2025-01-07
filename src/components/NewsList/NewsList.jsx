import NewsItem from "../NewsItem/NewsItem";

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
        </section>
    )
}