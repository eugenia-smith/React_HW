import UserItem from "../userItem/userItem";
import styles from "./styles.module.css";

function UserList({ users }) {
  console.log("Rendering UserList");

  return (
    <ul className={styles.users_list}>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <UserItem user={user} />
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
