import FriendsList from "../../components/FriendsList/FriendsList";
import { titleOurFriends } from "../../components/Title/Title";

export default function OutFriendsPage() {
  return (
    <div>
      <>{titleOurFriends()}</>
      <FriendsList/>
    </div>
  )
}
