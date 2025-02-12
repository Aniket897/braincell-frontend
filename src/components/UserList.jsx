import "../styles/userlist.css";
import UserCard from "./UserCard";

export default function UserList({ users }) {
  return (
    <div className="userList">
      {users?.map((user) => {
        return <UserCard {...user} key={user.id} />;
      })}
    </div>
  );
}
