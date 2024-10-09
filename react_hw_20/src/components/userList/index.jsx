import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.users.users);

  return (
    <ul>
      {users.map((elem) => {
        return (
          <li key={elem.id}>
            <p>{`${elem.name} -- ${elem.email}`}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
