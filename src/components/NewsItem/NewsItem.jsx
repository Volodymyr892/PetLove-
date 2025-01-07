import css from "./NewsItem.module.css"
import news from "../../assets/news.png"
export default function NewsItem(){
    return(
        <>
        <img src={news} alt="news" />
        <ul>
            <li>
                <h3 className={css.title}>On Pets, Moral Logic and Love</h3>
                <p className={css.description}>In January, I fell in love with someone. It was the last thing I’d expect and caught me completely off guard. He has sandy blond hair with flecks of gray and gorgeous, sad eyes. </p>
            </li>
            <li className={css.item}>
                <p className={css.data}>15/03/2023</p>
                <p className={css.read}>Read more</p>
            </li>
        </ul>
        </>
    )
}