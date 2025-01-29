import MyNotices from "../../components/MyNotices/MyNotices";
import UserCard from "../../components/UserCard/UserCard";
import css from "./ProfilePage.module.css"

export default function ProfilePage() {


  return (
    <section className={css.section}>
      <UserCard/>
      <MyNotices/>
    </section>
  )
}