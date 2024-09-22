import { connect } from "react-redux";
import { setUserInfo } from "../redux/actions";
import styles from "./styles.module.css";
import { useState } from "react";

function UserForm({ setUserInfo }) {
  const [userName, setUserName] = useState("");
  const [status, setStatus] = useState("Online");
  return (
    <form
      className={styles.user_form}
      onSubmit={(e) => {
        e.preventDefault();
        setUserInfo(userName, status);
      }}
    >
      <label>
        Name:{" "}
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </label>
      <label>
        Status:{" "}
        <select
          defaultValue={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Online</option>
          <option>Away</option>
          <option>Offline</option>
          <option>Deceased</option>
          <option>Undead</option>
          <option>Ressurected</option>
          <option>Reincarnated</option>
          <option>Holy Ghost</option>
          <option>Little Pony</option>
        </select>
      </label>

      <input type="submit" value="Set Status" />
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (userName, status) => dispatch(setUserInfo(userName, status)),
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
