import NewsList from "../../components/NewsList/NewsList"
import SearchField from "../../components/SearchField/SearchField"
import { titleNews } from "../../components/Title/Title"
import css from "./NewsPage.module.css"
export default function NewsPage() {
  return (
    <div>
      <div className={css.container}>
        <>{titleNews()}</>
        <SearchField/>
      </div>
      <NewsList/>
    </div>
  )
}