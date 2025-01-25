import css from "./NewsItem.module.css"
export default function NewsItem({news}){
     // Визначення максимального числа символів
     const maxLength = 100; // Встановіть максимальну кількість символів, яку хочете показати

     // Обрізаємо текст і додаємо "..." якщо він перевищує maxLength
     const truncatedText = news.text.length > maxLength 
         ? news.text.slice(0, maxLength) + "..."
         : news.text;

     const max = 50;
     const title = news.title.length > max 
     ? news.title.slice(0, max) + "..."
     : news.title;
    return(
        <div className={css.container}>
        <img className={css.img} src={news.imgUrl} alt="news" />
        <ul>
            <li>
                <h3 className={css.title}>{title}</h3>
                <p className={css.description}>{truncatedText} </p>
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