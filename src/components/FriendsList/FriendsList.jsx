import FriendsItem from "../FriendsItem/FriendsItem";
// import Pagination from "../Pagination/Pagination";

export default function FriendsList(){
    return(
        <section>
            <ul>
                <li><FriendsItem/></li>
            </ul>
            <ul>
                <li><FriendsItem/></li>
            </ul>
            <ul>
                <li><FriendsItem/></li>
            </ul>
            <ul>
                <li><FriendsItem/></li>
            </ul>
            {/* <Pagination/> */}
        </section>
    )
}