import { connect } from "react-redux";
import styles from "./styles.module.css";

function User({ userName, status }) {
  return (
    <article className={styles.user_card}>
      <h3 className={styles.user_name}>{userName}</h3>
      <p className={styles.user_status}>Status: {status}</p>
    </article>
  );
}

const mapStateToProps = (state) => ({
  userName: state.userName,
  status: state.status,
});

export default connect(mapStateToProps, null)(User);
