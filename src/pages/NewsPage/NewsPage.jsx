import NewsList from "../../components/NewsList/NewsList"
import SearchField from "../../components/SearchField/SearchField"
import { titleNews } from "../../components/Title/Title"
export default function NewsPage() {
  return (
    <div>
      <>{titleNews()}</>
      <SearchField/>
      <NewsList/>
    </div>
  )
}