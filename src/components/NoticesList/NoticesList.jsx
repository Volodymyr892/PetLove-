import NoticesItem from "../NoticesItem/NoticesItem"
import Pagination from "../Pagination/Pagination"

export default function NoticesList(){
    return(
        <section>
            <ul>
                <li><NoticesItem/></li>
                <li><NoticesItem/></li>
                <li><NoticesItem/></li>
                <li><NoticesItem/></li>
            </ul>
            <Pagination/>
        </section>
    )
}