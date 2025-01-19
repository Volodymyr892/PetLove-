import css from "./NewsItem.module.css"
export default function NewsItem({news}){
    return(
        <div className={css.container}>
        <img className={css.img} src={news.imgUrl} alt="news" />
        <ul>
            <li>
                <h3 className={css.title}>{news.title}</h3>
                <p className={css.description}>{news.text} </p>
            </li>
            <li className={css.item}>
                <p className={css.data}>{new Date(news.date).toLocaleDateString('en-GB')}</p>
                <a 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 href={news.url} 
                 className={css.read}>Read more</a>
            </li>
        </ul>
        </div>
    )
}