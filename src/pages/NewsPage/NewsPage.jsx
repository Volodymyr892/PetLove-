import NewsList from "../../components/NewsList/NewsList"
import { SearchNews } from "../../components/SearchField/SearchField"
import { titleNews } from "../../components/Title/Title"
import css from "./NewsPage.module.css"
export default function NewsPage() {
  return (
    <div>
      <div className={css.container}>
        <>{titleNews()}</>
        <SearchNews/>
      </div>
      <NewsList/>
    </div>
  )
}