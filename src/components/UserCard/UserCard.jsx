import EditUserBtn from "../EditUserBtn/EditUserBtn";
import { LogOutBtnProfile } from "../LogOutBtn/LogOutBtn";
import PetsBlock from "../PetsBlock/PetsBlock";
import UserBlock from "../UserBlock/UserBlock";
import css from "./UserCard.module.css"

export default function UserCard() {
    return(
        <section className={css.section}>
        <EditUserBtn/>
        <UserBlock/>
        <PetsBlock/>
        <LogOutBtnProfile/>
        </section>
    )
}