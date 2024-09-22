import UserItem from "../userItem/userItem";
import { connect } from "react-redux";
import styles from "./styles.module.css";

function UserList({ users }) {
  return (
    <ul className={styles.users_list}>
      {users.map((user) => {
        return (
          <li>
            <UserItem key={user.id} user={user} />
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, null)(UserList);
