import NoticesFilters from "../../components/NoticesFilters/NoticesFilters";
import NoticesList from "../../components/NoticesList/NoticesList";
import { titleOurFind } from "../../components/Title/Title";

export default function NoticesPage() {
  return (
    <div>
      <>{titleOurFind()}</>
      <NoticesFilters/>
      <NoticesList/>
    </div>
  )
}