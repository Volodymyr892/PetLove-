import { useDispatch, useSelector } from "react-redux";
import FriendsItem from "../FriendsItem/FriendsItem";
import { selectFriends } from "../../redux/friends/selectors";
import { useEffect } from "react";
import { fetchFriends } from "../../redux/friends/operations";
import css from "./FriendsList.module.css"

export default function FriendsList(){
    const dispatch = useDispatch();
    const friends  = useSelector(selectFriends);
    
    useEffect(() => {
        dispatch(fetchFriends());
    }, [dispatch]);
   
    return(
        <section>
            <ul className={css.list}>
                {friends && friends.map((friendItem)=>(
                <li key={friendItem._id}>
                    <FriendsItem friend={friendItem}/>
                </li>))
                }
            </ul>
        </section>
    )
}